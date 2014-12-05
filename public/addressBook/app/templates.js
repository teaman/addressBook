define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["app.init"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"main-app\">\n  <div id=\"header\"></div>\n  <div id=\"content\"></div>\n</div>";
  });

this["Templates"]["contact.detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n					    	<option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = ((stack1 = (depth1 && depth1.contact)),stack1 == null || stack1 === false ? stack1 : stack1.state)),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.id), ((stack1 = ((stack1 = (depth1 && depth1.contact)),stack1 == null || stack1 === false ? stack1 : stack1.state)),stack1 == null || stack1 === false ? stack1 : stack1.id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n						";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"main-content\">\r\n	<div class=\"contact-header col-sm-offset-2 col-sm-10\">\r\n		<h6>\r\n			<span class=\"glyphicon glyphicon-user\"></span>\r\n			<span class=\"contact-name\">New Contact</span>\r\n		</h6>\r\n	</div>\r\n	<div class=\"form-wrapper\">\r\n		<form id=\"contact-form\" class=\"contact-form form-horizontal\" role=\"form\">\r\n			<input type=\"hidden\" id=\"id\" class=\"form-control\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		   <div class=\"form-group\">\r\n		      <label for=\"firstname\" class=\"col-sm-2 control-label\">First Name</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter First Name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		          </span>\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <label for=\"lastname\" class=\"col-sm-2 control-label\">Last Name</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Enter Last Name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"email\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <label for=\"phone\" class=\"col-sm-2 control-label\">Phone</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Enter Phone Number\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <label for=\"address\" class=\"col-sm-2 control-label\">Address</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"address\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <label for=\"city\" class=\"col-sm-2 control-label\">City</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"city\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n			\r\n			<div class=\"form-group\">\r\n				<label for=\"state\" class=\"col-sm-2 control-label\">State</label>\r\n				<div class=\"col-sm-5\">\r\n					<select id=\"stateId\" class=\"form-control\">\r\n					    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.states), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</select>\r\n				</div>\r\n			</div>\r\n\r\n		   <div class=\"form-group\">\r\n		      <label for=\"zipcode\" class=\"col-sm-2 control-label\">Zip Code</label>\r\n		      <div class=\"col-sm-5\">\r\n		         <input type=\"text\" class=\"form-control\" id=\"zipcode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.zipCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		      </div>\r\n		   </div>\r\n		   <div class=\"form-group\">\r\n		      <div class=\"col-sm-offset-2 col-sm-5\">\r\n		         <button class=\"save-butt btn btn-primary\" disabled=\"disabled\">Save</button>\r\n		         <button class=\"cancel-butt btn btn-default\">Cancel</button>\r\n		      </div>\r\n		   </div>\r\n		</form>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Templates"]["contact.list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			    	<th>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n			   	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<tr>\r\n				<td>";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.state)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				<td>";
  if (helper = helpers.zipCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.zipCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>\r\n					<button class=\"edit-butt grid-butt btn btn-info\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit</button>\r\n					<button class=\"delete-butt grid-butt btn btn-danger\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Delete</button>\r\n				</td>\r\n			</tr>\r\n			";
  return buffer;
  }

  buffer += "<div class=\"main-content\">\r\n	<table class=\"table striped\">\r\n		<thead>\r\n			<tr>\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.columns), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.contacts), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</tbody>\r\n	</table>\r\n	<div class=\"contact-actions-container\">\r\n		<button class=\"create-butt btn btn-primary\">Create</button>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Templates"]["confirm.dialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"confirm-dialog modal fade\">\r\n	<div class=\"modal-dialog\">\r\n		<div class=\"modal-content\">\r\n			<div class=\"modal-header\">\r\n				This is a Test\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
  });

this["Templates"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n	<h3 class=\"pull-left header-text\">Address Book Example Application</h3>\n</div>\n<div class=\"clear\"></div>";
  });

this["Templates"]["repo.item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"repo-item\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

return this["Templates"];

});