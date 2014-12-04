/**
 * Special concat/build task to handle various jQuery build requirements
 * Concats AMD modules, removes their definitions, and includes/excludes specified modules
 */

module.exports = function(grunt) {

  "use strict";

  var fs         = require("fs"),
      requirejs  = require("requirejs"),
      srcFolder  = __dirname + "/../../src/",
      rdefineEnd = /\}\);[^}\w]*$/;



  /**
   * Strip all definitions generated by requirejs
   * Convert "var" modules to var declarations
   * "var module" means the module only contains a return statement that should be converted to a var declaration
   * This is indicated by including the file in any "var" folder
   * @param {String} name
   * @param {String} path
   * @param {String} contents The contents to be written (including their AMD wrappers)
   */
  function convert(name, path, contents) {
    var amdName;
    // Convert var modules
    if (/.\/var\//.test(path)) {
      contents = contents
        .replace(/define\([\w\W]*?return/, "var " + (/var\/([\w-]+)/.exec(name)[1]) + " =")
        .replace(rdefineEnd, "");

    // Sizzle treatment
    } else if (/^sizzle$/.test(name)) {
      contents = "var Sizzle =\n" + contents
        // Remove EXPOSE lines from Sizzle
        .replace(/\/\/\s*EXPOSE[\w\W]*\/\/\s*EXPOSE/, "return Sizzle;");

    } else {

      // Ignore jQuery's exports (the only necessary one)
      if (name !== "vertebrae") {
        contents = contents
          .replace(/\s*return\s+[^\}]+(\}\);[^\w\}]*)$/, "$1")
          // Multiple exports
          .replace(/\s*exports\.\w+\s*=\s*\w+;/g, "");
      }

      // Remove define wrappers, closure ends, and empty declarations
      contents = contents
        .replace(/define\([^{]*?{/, "")
        .replace(rdefineEnd, "");

      // Remove anything wrapped with
      // /* ExcludeStart */ /* ExcludeEnd */
      // or a single line directly after a // BuildExclude comment
      contents = contents
        .replace(/\/\*\s*ExcludeStart\s*\*\/[\w\W]*?\/\*\s*ExcludeEnd\s*\*\//ig, "")
        .replace(/\/\/\s*BuildExclude\n\r?[\w\W]*?\n\r?/ig, "");

      // Remove empty definitions
      contents = contents
        .replace(/define\(\[[^\]]+\]\)[\W\n]+$/, "");
    }
    // AMD Name
    if ((amdName = grunt.option("amd")) != null && /^exports\/amd$/.test(name)) {
      if (amdName) {
        grunt.log.writeln("Naming Vertebrae with AMD name: " + amdName);
      } else {
        grunt.log.writeln("AMD name now anonymous");
      }
      // Remove the comma for anonymous defines
      contents = contents
        .replace(/(\s*)"jquery"(\,\s*)/, amdName ? "$1\"" + amdName + "\"$2" : "");

    }
    return contents;
  }

  grunt.registerMultiTask(
    "build",
    "Concatenate source, remove sub AMD definitions and embed date/version",
  function() {
    var flag       = null, 
        index      = null,
        done       = this.async(),
        flags      = this.flags,
        optIn      = flags[ "*" ],
        name       = this.data.dest,
        minimum    = this.data.minimum,
        removeWith = this.data.removeWith,
        ignore     = this.data.ignore || [],
        version    = grunt.config("pkg.version"),
        config     = null;

    config = {
      baseUrl: "src",
      name: "vertebrae",
      out: "dist/vertebrae.js",
      // We have multiple minify steps
      optimize: "none",
      // Include dependencies loaded with require
      findNestedDependencies: false,
      // Avoid breaking semicolons inserted by r.js
      skipSemiColonInsertion: true,
      paths: {},
      wrap: {
        startFile: "src/wrappers/intro.js",
        endFile: "src/wrappers/outro.js"
      },
      rawText: {},
      onBuildWrite: convert
    };

    ignore.forEach(function(name) {
      config.paths[name] = 'empty:';
    });

    // append commit id to version
    if (process.env.COMMIT) {
      version += " " + process.env.COMMIT;
    }

    // grunt.verbose.writeflags(excluded, "Excluded");
    // grunt.verbose.writeflags(included, "Included");

    /**
     * Handle Final output from the optimizer
     * @param {String} compiled
     */
    config.out = function(compiled) {
      compiled = compiled
        // Embed Version
        .replace(/@VERSION/g, version)
        // Embed Date
        // yyyy-mm-ddThh:mmZ
        .replace(/@DATE/g, (new Date()).toISOString().replace(/:\d+\.\d+Z$/, "Z"));

      // Write concatenated source to file
      grunt.file.write(name, compiled);
    };

    // Trace dependencies and concatenate files
    requirejs.optimize(config, function(response) {
      grunt.verbose.writeln(response);
      grunt.log.ok("File '" + name + "' created.");
      done();
    }, function(err) {
      done(err);
    });
  });

};