this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["navigation/live-programming"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"series\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"episode\">Season "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Ep "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"series\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"episode\">Season "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Ep "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"series\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"episode\">Season "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Ep "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"series\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"episode\">Season "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Ep "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        ";
  return buffer;
  }

  buffer += "<div class=\"channel shoeast\">\n    <div class=\"channelDetails\">\n        <div class=\"logo\"></div>\n        <a href=\"#\" class=\"sho-play-linear\" data-channel=\"shoeast\">Watch Now</a>\n    </div>\n    <div class=\"program now\">\n        <label>On Now</label>\n        <time>"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options) : helperMissing.call(depth0, "moment", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options)))
    + " ";
  if (helper = helpers.getCurrentTimezoneAbbrv) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getCurrentTimezoneAbbrv); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n    <div class=\"program next\">\n        <label>On Next</label>\n        <time>"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options) : helperMissing.call(depth0, "moment", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options)))
    + " ";
  if (helper = helpers.getCurrentTimezoneAbbrv) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getCurrentTimezoneAbbrv); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.shoeast)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n</div>\n\n<div class=\"channel showest\">\n    <div class=\"channelDetails\">\n        <div class=\"logo\"></div>\n        <a href=\"#\" class=\"sho-play-linear\" data-channel=\"showest\">Watch Now</a>\n    </div>\n    <div class=\"program now\">\n        <label>On Now</label>\n        <time>"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options) : helperMissing.call(depth0, "moment", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options)))
    + " ";
  if (helper = helpers.getCurrentTimezoneAbbrv) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getCurrentTimezoneAbbrv); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.now)),stack1 == null || stack1 === false ? stack1 : stack1.series), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n    <div class=\"program next\">\n        <label>On Next</label>\n        <time>"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options) : helperMissing.call(depth0, "moment", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.time), "h:mma", options)))
    + " ";
  if (helper = helpers.getCurrentTimezoneAbbrv) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getCurrentTimezoneAbbrv); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.channels)),stack1 == null || stack1 === false ? stack1 : stack1.showest)),stack1 == null || stack1 === false ? stack1 : stack1.next)),stack1 == null || stack1 === false ? stack1 : stack1.series), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    \n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.platforms)),stack1 == null || stack1 === false ? stack1 : stack1.activate), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    \n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.platforms)),stack1 == null || stack1 === false ? stack1 : stack1.activate), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                        <h5 class=\"subtitle\">Stream to your TV:</h5>\n                    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "SPARROW", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "SPARROW", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "APPLE_TV", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "APPLE_TV", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "ROKU", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "ROKU", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "XBOX_360", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "XBOX_360", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "XBOX_ONE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "XBOX_ONE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n                            <a class=\"amazon-firetv-link tv-link\" target=\"_blank\" href=\"http://www.amazon.com/gp/product/B00B4G3MV8\"><img src=\"common/img/logos/amazon-firetv-logo.png\" alt=\"Link to Amazon Fire TV App\"></a>\n                        ";
  }

function program7(depth0,data) {
  
  
  return "\n                            <span class=\"appletv-link tv-link\"><img src=\"common/img/logos/appletv-logo.png\" alt=\"Link to Apple TV App in Store\"></span>\n                        ";
  }

function program9(depth0,data) {
  
  
  return "\n                            <a class=\"roku-link tv-link\" target=\"_blank\" href=\"http://www.roku.com/channels/#!details/38820/showtime-anytime\"><img src=\"common/img/logos/roku-logo.png\" alt=\"Link to Roku App\"></a>\n                        ";
  }

function program11(depth0,data) {
  
  
  return "\n                            <a class=\"xbox-360-link tv-link\" target=\"_blank\" href=\"http://www.xbox.com/en-US/entertainment/xbox-360/live-apps/showtime-anytime\"><img src=\"common/img/logos/xbox-360-logo.png\" alt=\"Link to Xbox 360 App\"></a>\n                        ";
  }

function program13(depth0,data) {
  
  
  return "\n                            <a class=\"xbox-one-link tv-link\" target=\"_blank\" href=\"http://www.xbox.com/en-US/entertainment/xbox-one/live-apps/showtime\"><img src=\"common/img/logos/xbox-one-logo.png\" alt=\"Link to Xbox One App\"></a>\n                        ";
  }

function program15(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    \n                    <h5 class=\"subtitle\">Stream to your TV:</h5>\n                    <a class=\"amazon-firetv-link tv-link\" target=\"_blank\" href=\"http://www.amazon.com/gp/product/B00B4G3MV8\"><img src=\"common/img/logos/amazon-firetv-logo.png\" alt=\"Link to Amazon Fire TV App\"></a>\n                    <span class=\"appletv-link tv-link\"><img src=\"common/img/logos/appletv-logo.png\" alt=\"Link to Apple TV App in Store\"></span>\n                    <a class=\"roku-link tv-link\" target=\"_blank\" href=\"http://www.roku.com/channels/#!details/38820/showtime-anytime\"><img src=\"common/img/logos/roku-logo.png\" alt=\"Link to Roku App\"></a>\n                    <a class=\"xbox-360-link tv-link\" target=\"_blank\" href=\"http://www.xbox.com/en-US/entertainment/xbox-360/live-apps/showtime-anytime\"><img src=\"common/img/logos/xbox-360-logo.png\" alt=\"Link to Xbox 360 App\"></a>\n                    <a class=\"xbox-one-link tv-link\" target=\"_blank\" href=\"http://www.xbox.com/en-US/entertainment/xbox-one/live-apps/showtime\"><img src=\"common/img/logos/xbox-one-logo.png\" alt=\"Link to Xbox One App\"></a>\n                ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\n            <div id=\"about-upsell\">\n                <div id=\"cashback-offer\">\n                    <span class=\"caption\">DON'T HAVE SHOWTIME?</span> <a class=\"sho-link\" href=\"http://www.sho.com/sho/order/home?source=acq_shoanytime_about\">ORDER NOW</a>\n                </div>\n                <div id=\"not-convinced-episodes-offer\">\n                    <span class=\"caption\">Still not convinced?</span> <a class=\"sho-link\" href=\"/#/freeepisodes\">Sample Free Full Episodes</a>\n                </div>\n            </div>\n        ";
  }

  buffer += "<div id=\"about-page-container\" class=\"non-grid-page\">\n    <h2 class=\"pageTitle padded\">About</h2>\n    <div id=\"about-page-content\">\n        <div id=\"about-showtime-overview\">\n            <div id=\"about-features\">\n                <div class=\"header\">\n                    <h2 class=\"title\">Free with your Showtime<sup>&reg;</sup> Subscription</h2>\n                    <h5 class=\"subtitle\">Through participating TV providers</h5>\n                </div>\n\n                <p class=\"intro\">\n                    Get unlimited on-demand access to award-winning original series, hit movies, sports, comedy, and much more on your computer, tablet, mobile device,\n                    TV streaming device and game console. And by selecting \"LIVE TV\" you can also watch what's currently airing live on SHOWTIME.\n                </p>\n\n                <h5 class=\"subtitle\">User-Friendly Features</h5>\n                <ul>\n                    <li><span class=\"caption\">My List:</span> Organize and view your favorite programs</li>\n                    <li><span class=\"caption\">Add New Episodes:</span> Automatically adds new episodes of your favorite series to your My List as they premiere</li>\n                    <li><span class=\"caption\">Play Shifting:</span> Resume Watching on one device where you left off on another</li>\n                </ul>\n            </div>\n\n            <img src=\"common/img/device-lockup-full.png\" alt=\"All Showtime Devices Preview Image\" id=\"about-inset\">\n        </div>\n\n\n\n\n        <div id=\"dedicated-app-links-container\">\n            <div id=\"tv-apps-container\">\n                \n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.msoId), {hash:{},inverse:self.program(15, program15, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <span class=\"chromecast-link tv-link\"><img src=\"common/img/logos/chromecast-logo.png\" alt=\"Link to Chromecast App\"></span>\n            </div>\n\n            <div id=\"mobile-apps-container\">\n                <h5 class=\"subtitle\">Download the Mobile App:</h5>\n                <a class=\"ios-link\" target=\"_blank\" href=\"https://itunes.apple.com/us/app/id484232467\"><img src=\"common/img/logos/apple-app-store.png\" alt=\"Link to App Store\"></a>\n                <a class=\"android-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.showtime.showtimeanytime\"><img src=\"common/img/logos/google-play-store.png\" alt=\"Link to Google Play\"></a>\n                <a class=\"amazon-link\" target=\"_blank\" href=\"http://www.amazon.com/gp/product/B00B4G3MV8\"><img src=\"common/img/logos/amazon-app-store.png\" alt=\"Link to Amazon Android App Store\"></a>\n            </div>\n        </div>\n\n        \n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.msoId), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div id=\"about-trademark-legal-text\">\n            <p>\n                iPhone and iPad are registered trademarks of Apple Inc. App Store is a service mark of Apple Inc. Android is a trademark of Google Inc. Amazon, Kindle, Kindle Fire, the Amazon Kindle logo and the Amazon Kindle Fire logo are trademarks of Amazon.com Inc.\n                or its affiliates. Roku and the Roku logo are registered trademarks of Roku Inc. in the United States and other countries. Xbox 360 is either a registered trademark or a trademark of Microsoft Corporation in the United States and/or other countries.\n                Apple TV is a registered trademark of Apple Inc.\n            </p>\n        </div>\n\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/page-item-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return " fixedHeader";
  }

  buffer += "<div class=\"non-grid-page\" id=\"page-"
    + escapeExpression((helper = helpers.slug || (depth0 && depth0.slug),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "slug", (depth0 && depth0.name), options)))
    + "\">\n	<h2 class=\"pageTitle padded";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fixedHeader), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n	</h2>\n	<div id=\"page-body\">\n	    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/collect-dob-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"sho-modal-header\">\n    <h1 class=\"title\">Confirm your age</h1>\n    <a class=\"close\" href=\"#\">×</a>\n</div>\n<div class=\"sho-modal-content\">\n    <form>\n    <h2 class=\"underlined\">Confirm your birth date</h2>\n        <div class=\"input required\">\n            <input id=\"dob-input\" type=\"text\" name=\"dob\" class=\"datemask date\">\n            <span class=\"sho-error\" id=\"invalid-date\">Please enter a valid date</span>\n        </div>\n        <div class=\"input submit\">\n            <input type=\"submit\" value=\"Go\">\n        </div>\n    </form>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/welcome-user-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n<img src=\"common/img/logos/showtime-anytime-white-grey.png\" />\n<div class=\"welcome-container\">\n    <img class=\"device-lockup\" src=\"common/img/device-lockup-full.png\" alt=\"Showtime Anytime Devices\" />\n    <div class=\"welcome-content\">\n        <h1 class=\"title\">Free with your Showtime<sup>&reg;</sup> subscription</h1>\n        <h5 class=\"subtitle\">Through participating TV providers</h5>\n        <p>\n            Get unlimited access to SHOWTIME<sup>&reg;</sup> series, hit movies, sports and much more whenever you want. Plus, watch\n            what's airing LIVE on SHOWTIME from your computer, tablet, mobile device, TV streaming device and game console.\n        </p>\n        <p><a href=\"/#/page/about\" class=\"button\">Learn More</a></p>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/all-movies-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            \n            ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), "not", "448", options) : helperMissing.call(depth0, "is", (depth0 && depth0.id), "not", "448", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <option value=\""
    + escapeExpression((helper = helpers.slug || (depth0 && depth0.slug),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), "", options) : helperMissing.call(depth0, "slug", (depth0 && depth0.name), "", options)))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }

  buffer += "<h2 class=\"pageTitle padded fixedHeader\">\n    Movies\n    <select id=\"category-selector\" class=\"page-filter-selector\">\n        <option value=\"allmovies\">All Movies</option>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.availableCategories), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</h2>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/all-movies-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"all-movies-header\"></div>\n<div id=\"movies-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/all-series-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2 class=\"pageTitle padded fixedHeader\">\n    Series\n    <select id=\"switchBetweenAllAndCurrentSeries\" class=\"page-filter-selector\">\n        <option value=\"all\">All Series</option>\n        <option value=\"current\">Current Series</option>\n    </select>\n</h2>\n<div id=\"series-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/category-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"pageTitle padded fixedHeader\">\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</h2>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/category-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"category-header\"></div>\n<div id=\"category-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/collection-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"title\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<a class=\"my-list-link\" href=\"#\"><span class=\"icon icon-sm player add\"></span> Add Collection to My List</a>\n<div class=\"description\">\n    ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/collection-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"collection-header\"></div>\n<div id=\"collection-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/episode-detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <a href=\"#/freeepisodes\" class=\"title-nav-link\">See All Free Full Episodes</a>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#/series/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"title-nav-link\">All Episodes</a>\n\n            \n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.previousTitleId), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nextTitleId), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a href=\"#/episode/";
  if (helper = helpers.previousTitleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.previousTitleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title-nav-link\">Prev</a>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a href=\"#/episode/";
  if (helper = helpers.nextTitleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nextTitleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title-nav-link\">Next</a>\n            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <img itemprop=\"image\" src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\""
    + escapeExpression(((stack1 = (depth0 && depth0.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = (depth0 && depth0.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n                <img class=\"placeholder\" alt=\"Image not available\"/>\n            ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"progress-bar\">\n                    <div style=\"width: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bookmark)),stack1 == null || stack1 === false ? stack1 : stack1.percentWatched)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\"></div>\n                </div>\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return " free-full-episode";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isInMyList), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program17(depth0,data) {
  
  
  return "\n                    <span class=\"control\" href=\"#\"><span class=\"icon icon-sm player added\"></span> Added</span>\n                ";
  }

function program19(depth0,data) {
  
  
  return "\n                    <a class=\"control add\" href=\"#\"><span class=\"icon icon-sm player add\"></span> Add</a>\n                ";
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"title-cast\">\n            <div class=\"title\">Cast &amp; Crew</div>\n\n            <div class=\"actors\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n\n            <div class=\"directors-and-writers\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "===", "Actor", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "===", "Actor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <div class=\"actor-wrapper\">\n                            <div class=\"row\">\n                                <span class=\"name\"><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                                <span class=\"role\"><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.role)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                            </div>\n                        </div>\n                    ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "!==", "Actor", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "!==", "Actor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.creditDetail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"name\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                    ";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "no-separator";
  }

function program30(depth0,data) {
  
  
  return "<span class=\"flag featured\">FEATURED</span>";
  }

function program32(depth0,data) {
  
  
  return "<span class=\"flag new\">NEW</span>";
  }

function program34(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  stack1 = helpers.unless.call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program35(depth0,data) {
  
  
  return ",&nbsp;";
  }

function program37(depth0,data) {
  
  
  return " <span class=\"flag last-chance\">LAST CHANCE</span>";
  }

  buffer += "<div itemscope itemtype=\"http://schema.org/TVEpisode\">\n    <div class=\"title-nav-links\">\n        \n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isFree), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    <div class=\"title-player-social\">\n        <div class=\"progress-container\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.bookmark)),stack1 == null || stack1 === false ? stack1 : stack1.percentWatched), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"player-controls\">\n            <a class=\"control sho-play-link";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "free", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "free", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"icon icon-sm player play\"></span> Play</a>\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isFree), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"social\">\n            <a target=\"_blank\" class=\"social-link\" data-social-service=\"facebook\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"icon social facebook\"></span> Share</a><br>\n            <a target=\"_blank\" class=\"social-link\" data-social-service=\"twitter\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitterIntentLink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"icon social twitter\"></span> Tweet</a>\n        </div>\n\n    </div>\n\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"title-info ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <h1 class=\"title\">\n            <span itemprop=\"partOfTVSeries\" itemscope itemtype=\"http://schema.org/TVSeries\"><span itemprop=\"name\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n        </h1>\n        <h3 class=\"subtitle\">SEASON\n            <span itemprop=\"partOfSeason\" itemscope itemtype=\"http://schema.org/TVSeason\">\n                <span itemprop=\"seasonNumber\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </span>\n            EP <span itemprop=\"episodeNumber\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>: <span itemprop=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </h3>\n        <div class=\"flags\">\n            ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "NEW", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "NEW", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <p class=\"description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1['long'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n        <ul class=\"title-fine-info\">\n            <li>RELEASED: ";
  if (helper = helpers.releaseYear) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.releaseYear); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>RATING: ";
  if (helper = helpers.titleRating) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleRating); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>ADVISORIES:\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.advisories), {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </li>\n            <li>DURATION: "
    + escapeExpression((helper = helpers.convertSecondsToMinutes || (depth0 && depth0.convertSecondsToMinutes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.duration), options) : helperMissing.call(depth0, "convertSecondsToMinutes", (depth0 && depth0.duration), options)))
    + " min</li>\n            <li>EXPIRATION: "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.expirationDate), ".", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.expirationDate), ".", options)));
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "LAST_CHANCE", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "LAST_CHANCE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n            <li class=\"legal\">";
  if (helper = helpers.legalLine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.legalLine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n\n</div>\n\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/episode"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class=\"season\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": S "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Ep "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class=\"season\">Season "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " EP "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "free-full-episode";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isInMyList), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "\n                    <span class=\"control\" href=\"#\"><span class=\"icon player added\"></span><br>Added</span>\n                ";
  }

function program10(depth0,data) {
  
  
  return "\n                    <a class=\"control add\" href=\"#\"><span class=\"icon player add\"></span><br>Add</a>\n                ";
  }

function program12(depth0,data) {
  
  
  return "<span\n                            class=\"featured-text\">FEATURED</span>";
  }

  buffer += "<div>\n    <a href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title-item\">\n        <img src=\"common/img/sprites-and-icons/title-background.jpg\" data-original=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n        <div class=\"details\">\n            \n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showSeriesTitle), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n\n    </a>\n\n    <div class=\"controls-container\">\n        <div class=\"controls\">\n            <a class=\"control sho-play-link ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isFree), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"icon player play\"></span><br>Play</a>\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isFree), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a class=\"control info\" href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"sho-tooltip-content\">\n                    <div class=\"tooltip-header\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                    <div class=\"tooltip-body\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                    <div class=\"tooltip-footer\">\n                        Expiration: "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.expirationDate), ".", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.expirationDate), ".", options)))
    + " ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <br>\n                        ";
  if (helper = helpers.releaseYear) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.releaseYear); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " | Rated ";
  if (helper = helpers.titleRating) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleRating); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " | "
    + escapeExpression((helper = helpers.convertSecondsToMinutes || (depth0 && depth0.convertSecondsToMinutes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.duration), options) : helperMissing.call(depth0, "convertSecondsToMinutes", (depth0 && depth0.duration), options)))
    + "\n                        mins\n                    </div>\n\n                </div>\n                <div class=\"sho-tooltip\">\n                    <span class=\"icon player info\"></span><br>Info\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/free-full-episodes-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2 class=\"pageTitle padded\">Free Full Episodes</h2>\n<div class=\"header\">\n    <h1 class=\"title\">Sample Showtime Before you subscribe</h1>\n    <h2 class=\"subtitle\">Experience why Showtime is America's hottest premium network.</h2>\n</div>\n\n<div class=\"promo\">\n    <h2 class=\"title\">Want more of the best programming available?</h2>\n    <h5 class=\"subtitle\"><a href=\"http://www.sho.com/sho/order/home\" class=\"sho-link cash-back\">Order now</a></h5>\n    <p>\n        Note: Showtime Anytime is available with a Showtime subscription through participating TV providers.\n    </p>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/free-full-episodes-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"free-full-episodes-container\">\n    <div id=\"free-full-episodes-header\"></div>\n    <div id=\"free-full-episodes-grid\"></div>\n</div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/movie-detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <img itemprop=\"image\" src=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\""
    + escapeExpression(((stack1 = (depth0 && depth0.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = (depth0 && depth0.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n                <img class=\"placeholder\" alt=\"Image not available\"/>\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"progress-bar\">\n                    <div style=\"width: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bookmark)),stack1 == null || stack1 === false ? stack1 : stack1.percentWatched)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\"></div>\n                </div>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n                <span class=\"control\" href=\"#\"><span class=\"icon icon-sm player added\"></span> Added</span>\n            ";
  }

function program9(depth0,data) {
  
  
  return "\n                <a class=\"control add\" href=\"#\"><span class=\"icon icon-sm player add\"></span> Add</a>\n            ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"title-cast\">\n            <div>\n                <div class=\"title\">Cast &amp; Crew</div>\n                <div class=\"actors\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <div class=\"directors-and-writers\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "===", "Actor", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "===", "Actor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <div class=\"actor-wrapper\">\n                                <div class=\"row\">\n                                    <span class=\"name\"><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                                    <span class=\"role\"><span>"
    + escapeExpression(((stack1 = (depth0 && depth0.role)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                                </div>\n                            </div>\n                        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "!==", "Actor", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "!==", "Actor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.creditDetail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"name\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n                        ";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "no-separator";
  }

function program20(depth0,data) {
  
  
  return "<span class=\"flag featured\">FEATURED</span>";
  }

function program22(depth0,data) {
  
  
  return "<span class=\"flag new\">NEW</span>";
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  stack1 = helpers.unless.call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program25(depth0,data) {
  
  
  return ",&nbsp;";
  }

function program27(depth0,data) {
  
  
  return " <span class=\"flag last-chance\">LAST CHANCE</span>";
  }

  buffer += "<div itemscope itemtype=\"http://schema.org/Movie\">\n    <div class=\"title-player-social\">\n        <div class=\"progress-container\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.bookmark)),stack1 == null || stack1 === false ? stack1 : stack1.percentWatched), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"player-controls\">\n            <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"icon icon-sm player play\"></span> Play</a>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isInMyList), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"social\">\n            <a target=\"_blank\" class=\"social-link\" data-social-service=\"facebook\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"icon social facebook\"></span> Share</a><br>\n            <a target=\"_blank\" class=\"social-link\" data-social-service=\"twitter\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitterIntentLink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"icon social twitter\"></span> Tweet</a>\n        </div>\n\n    </div>\n\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"title-info ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.credits), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <h1 itemprop=\"name\" class=\"title\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <div class=\"flags\">\n            ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "NEW", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "NEW", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <p class=\"description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1['long'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n        <ul class=\"title-fine-info\">\n            <li>RELEASED: ";
  if (helper = helpers.releaseYear) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.releaseYear); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>RATING: ";
  if (helper = helpers.titleRating) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleRating); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>ADVISORIES:\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.advisories), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </li>\n            <li>DURATION: "
    + escapeExpression((helper = helpers.convertSecondsToMinutes || (depth0 && depth0.convertSecondsToMinutes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.duration), options) : helperMissing.call(depth0, "convertSecondsToMinutes", (depth0 && depth0.duration), options)))
    + " min</li>\n            <li>EXPIRATION: "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.expirationDate), ".", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.expirationDate), ".", options)));
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "LAST_CHANCE", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "LAST_CHANCE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n            <li class=\"legal\">";
  if (helper = helpers.legalLine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.legalLine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/movie"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"details featured\">\n                <label>Featured</label>\n                <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"details\">\n                <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n                <span class=\"control\" href=\"#\"><span class=\"icon player added\"></span><br>Added</span>\n            ";
  }

function program7(depth0,data) {
  
  
  return "\n                <a class=\"control add\" href=\"#\"><span class=\"icon player add\"></span><br>Add</a>\n            ";
  }

function program9(depth0,data) {
  
  
  return "<span class=\"featured-text\">FEATURED</span>";
  }

  buffer += "<div>\n    <a href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title-item\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" data-original=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n        \n        ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n    <div class=\"controls-container\">\n        <div class=\"controls\">\n            <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"icon player play\"></span><br>Play</a>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isInMyList), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a class=\"control info\" href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"sho-tooltip-content\">\n                    <div class=\"tooltip-header\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                    <div class=\"tooltip-body\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                    <div class=\"tooltip-footer\">\n                        Expiration: "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.expirationDate), ".", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.expirationDate), ".", options)))
    + " ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <br>\n                        ";
  if (helper = helpers.releaseYear) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.releaseYear); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " | Rated ";
  if (helper = helpers.titleRating) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleRating); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " | "
    + escapeExpression((helper = helpers.convertSecondsToMinutes || (depth0 && depth0.convertSecondsToMinutes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.duration), options) : helperMissing.call(depth0, "convertSecondsToMinutes", (depth0 && depth0.duration), options)))
    + " mins\n                    </div>\n\n                </div>\n                <div class=\"sho-tooltip\">\n                    <span class=\"icon player info\"></span><br>Info\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/search-results-empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"no-search-results\">\n    <h2>There were no results for your search.<br>Please try your search again.</h2>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/search-results-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.resultCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " results found for <span class=\"search-term\">'";
  if (helper = helpers.searchTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'</span>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/search-results-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"search-results-header\"></div>\n<div id=\"search-results-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series-detail-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"title-link float-right\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return " class=\"long-title\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <p class=\"tuneIn\">";
  if (helper = helpers.tuneIn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tuneIn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " ";
  if (helper = helpers.createdBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.createdBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n            <span id=\"add-to-series-manager\" class=\"subtle\">&#x2714; Added to My List</span>\n        ";
  }

function program11(depth0,data) {
  
  
  return "\n            <a href=\"#\" id=\"add-to-series-manager\"><span class=\"icon add-new\"></span> Add New Episodes to My List</a>\n        ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.seasonNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seasonNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Season ";
  if (helper = helpers.seasonNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seasonNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<h2 class=\"pageTitle padded fixedHeader\">\n    Series\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n<header id=\"series-detail-header\" style=\"background:url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ") no-repeat top right;\">\n    <div>\n        <div class=\"overlay\">\n            <h1 ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.name)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 40, options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.name)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 40, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tuneIn), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <p class=\"medium description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.createdBy), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inSeriesManager), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</header>\n<section id=\"season-selector-wrapper\">\n    <select id=\"season-selector\">\n        <option value=\"all\">All Seasons</option>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.seasons), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n</section>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series-detail-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"series-detail-header\"></div>\n<div id=\"episode-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"details featured\">\n                <label>Featured</label>\n                <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"details\">\n                <span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </div>\n        ";
  return buffer;
  }

  buffer += "<div>\n    <a href=\"#/series/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title-item\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" data-original=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n        \n        ";
  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.flags), "FEATURED", options) : helperMissing.call(depth0, "contains", (depth0 && depth0.flags), "FEATURED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div class=\"controls-container\">\n            <div class=\"controls\">\n                <div class=\"control\">\n                    <div class=\"sho-tooltip-content\">\n                        <div class=\"tooltip-header\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                        <div class=\"tooltip-body\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.description)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                    </div>\n                    <div class=\"sho-tooltip\">\n                        <span class=\"icon player info\"></span><br>Info\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["misc/coming-soon-header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2 class=\"pageTitle padded fixedHeader\">\n    Coming Soon\n</h2>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["misc/coming-soon-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"masthead-img\">\n        <div class=\"flag\">\n            <h1>";
  if (helper = helpers.flagHeader) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.flagHeader); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n            <h2>";
  if (helper = helpers.flagSub) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.flagSub); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        </div>\n        \n        ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.image) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.image) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"info-sidebar bg bg-checkers\">\n            <div class=\"dash\"></div>\n            <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n            <h2>";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n            <p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n            <div class=\"promos\">\n                ";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.videos) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.videos); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.videos) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"tune-in\">\n                <p>";
  if (helper = helpers.secondaryCopy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secondaryCopy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n                <ul>\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data}
  if (helper = helpers.links) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.links); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.links) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"mast-container\">\n                <img class=\"promo-img masthead\" data-img-lg=\"";
  if (helper = helpers.large) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.large); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-img-md=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-img-sm=\"";
  if (helper = helpers.small) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.small); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            </div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <div class=\"promo-container ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.referenceId), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-link=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <div class=\"promo\">\n                            <div class=\"video\"></div>\n                            <div class=\"img-container\">\n                                ";
  options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}
  if (helper = helpers.referenceId) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.referenceId); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.referenceId) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}
  if (helper = helpers.image) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.image) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </div>\n                            <h3 class=\"promo-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n                        </div>\n                    </div>\n                ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "sho-play-link";
  }

function program7(depth0,data) {
  
  
  return "link";
  }

function program9(depth0,data) {
  
  
  return "\n                                    <span class=\"overlay\"><span class=\"icon player play-with-bg\"></span></span>\n                                ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <img class=\"promo-img clip-img\" data-img-md=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-img-sm=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <li><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"external-link\"><span class=\"icon right-arrow\"></span> ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                    ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"clips-container sho-collapsible-container\">\n        <h2 class=\"clips-label\"><a href=\"#\" class=\"sho-collapsible-btn\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h2>\n        <div class=\"clips sho-collapsible-content\">\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data}
  if (helper = helpers.videos) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.videos); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.videos) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"clip-container sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <div class=\"clip\">\n                        <div class=\"video\"></div>\n                        <div class=\"img-container\">\n                            <span class=\"overlay\"><span class=\"icon player play-with-bg\"></span></span>\n                            ";
  options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data}
  if (helper = helpers.image) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.image) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </div>\n                        <h3 class=\"clip-label\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n                    </div>\n                </div>\n            ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <img class=\"promo-img clip-img\" data-img-md=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-img-sm=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                            ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"multi\">\n        <div class=\"flag-holder\">\n            <div class=\"flag\">\n                <h1>";
  if (helper = helpers.flagHeader) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.flagHeader); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n                <h2>";
  if (helper = helpers.flagSub) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.flagSub); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n            </div>\n        </div>\n        <div class=\"items\">\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data}
  if (helper = helpers.items) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.items); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"item\">\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data}
  if (helper = helpers.image) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.image) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <h3 class=\"item-header\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n\n                    <p class=\"tunein\">On <span class=\"icon showtime\"></span> ";
  if (helper = helpers.tuneInDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tuneInDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n                    <p class=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                </div>\n            ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <img class=\"poster\" src=\"";
  if (helper = helpers.medium) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.medium); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    ";
  return buffer;
  }

  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SINGLE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "SINGLE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "CLIPBIN", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "CLIPBIN", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "MULTIPLE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "MULTIPLE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["misc/coming-soon-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"coming-soon-header\"></div>\n<div id=\"coming-soon-item-grid\"></div>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["navigation/header/menuItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"topLevel\" data-fullname=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"dropdown-wrapper\">\n        <span class=\"triangle outline\"></span>\n        <span class=\"triangle\"></span>\n        <nav>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submenus), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </nav>\n    </div>\n";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"subMenuType ";
  options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}
  if (helper = helpers.toLowerCase) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.toLowerCase); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.toLowerCase) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    <ul>\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                </div>\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program10(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li>\n                            <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"subNav\" data-fullname=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-parent=\""
    + escapeExpression(((stack1 = (depth3 && depth3.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        </li>\n                    ";
  return buffer;
  }

  buffer += "\n";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), "!==", "Live TV", options) : helperMissing.call(depth0, "is", (depth0 && depth0.name), "!==", "Live TV", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.submenus), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["navigation/footer/footer-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"tabbed-playlists\">\n    <ul class=\"tabs\">\n        <li id=\"myListTab\" class=\"myListTab seriesManagerTab\">\n            <span class=\"align-left\">\n                My List\n                <span class=\"myListCount\">(0)</span>\n            </span>\n            <span class=\"align-right carot\">&#9664;</span>\n        </li>\n        <li id=\"recentlyWatchedTab\" class=\"recentlyWatchedTab\">\n            Recently Watched\n        </li>\n    </ul>\n    <div id=\"messageContainer\" class=\"container\">\n        this is a message\n    </div>\n    <div class=\"tab-contents container\">\n        <div id=\"myListAndSeriesContainer\" class=\"container\">\n            <p class=\"myListInstructions\">Sorted A-Z</p>\n            <ul class=\"tabs\">\n                <li id=\"myListTab\" class=\"myListTab\">All Added <span class=\"myListCount\">(0)</span></li>\n                <li id=\"seriesManagerTab\" class=\"seriesManagerTab\">Series Manager</li>\n            </ul>\n            <div id=\"myListContainer\" class=\"container\"></div>\n            <div id=\"seriesManagerContainer\" class=\"container\">series manager</div>\n        </div>\n        <div id=\"recentlyWatchedContainer\" class=\"container\"></div>\n    </div>\n</div>\n<div class=\"legal\"></div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["navigation/footer/footer-legal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.legal)),stack1 == null || stack1 === false ? stack1 : stack1.footer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/settings-parental-controls-sub-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    <p>\n        To manage parental controls for Showtime Anytime,\n        visit your TV provider's site.\n    </p>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <h2>Account: <span class=\"lowercase\">";
  if (helper = helpers.userName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></h2>\n    <p>Parental controls have been set for your account. Only the primary account holder can change these settings.</p>\n    <div class=\"clearfix\">\n        <div id=\"parental-controls-dropdowns-container\">\n            <div class=\"input required half-wide inline\">\n                <label for=\"AccountSettingsMovies\">Movies:</label>\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.movie)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </div>\n            <div class=\"input required half-wide\">\n                <label for=\"AccountSettingsTv\">TV:</label>\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.tv)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </div>\n        </div>\n    </div>\n";
  return buffer;
  }

  stack1 = (helper = helpers.contains || (depth0 && depth0.contains),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.mso)),stack1 == null || stack1 === false ? stack1 : stack1.parentalControls), "OPERATOR", options) : helperMissing.call(depth0, "contains", ((stack1 = (depth0 && depth0.mso)),stack1 == null || stack1 === false ? stack1 : stack1.parentalControls), "OPERATOR", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/playlist/empty-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "You have not added any items to My List yet.<br />\nSimply select '+ADD' to add a show to My List.";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/playlist/empty-not-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>\n    Use My List to organize and view your favorite shows.<br />\n    Once you're logged in, simply select '+ADD' to add a show to My List.\n</p>\n<p>\n    <a href=\"#\" class=\"sho-link\" id=\"mylist-login\">Log in now</a> to add items.\n</p>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/playlist/episode"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div>\n        <a href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <div class=\"details\">\n                \n                <span class=\"series-title\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle), 70, options) : helperMissing.call(depth0, "truncate", ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle), 70, options)))
    + "</span>\n                <span class=\"season\">Season "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " EP "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </div>\n            <div class=\"controls-container\">\n                <div class=\"controls\">\n                    <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <span class=\"icon player play\"></span>\n                    </a>\n                    <a class=\"control info\" href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <span class=\"icon player info\"></span>\n                    </a>\n                    <a class=\"control remove\" href=\"#\">\n                        <span class=\"icon icon player x remove\"></span>\n                    </a>\n                </div>\n            </div>\n        </a>\n    </div>\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/playlist/movie"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div>\n    <a href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"details\">\n            <span class=\"name\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), 47, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.name), 47, options)))
    + "</span>\n        </div>\n        <div class=\"controls-container\">\n            <div class=\"controls\">\n                <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player play\"></span>\n                </a>\n                <a class=\"control info\" href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player info\"></span>\n                </a>\n                <a class=\"control remove\" href=\"#\">\n                    <span class=\"icon icon x player remove\"></span>\n                </a>\n            </div>\n        </div>\n    </a>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/recently-watched/empty-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Use Recently Watched to come back to shows that you've started watching.<br />\nAny show you play will be added to Recently Watched.";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/recently-watched/empty-not-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Use Recently Watched to come back to shows that you've started watching.<br />\nOnce you're logged in, any show you play will be added to Recently Watched.";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/recently-watched/episode"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div>\n    <a href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"progress-container\">\n            <div class=\"progress-bar\" style=\"width: ";
  if (helper = helpers.percentWatched) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentWatched); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%\"></div>\n        </div>\n        <div class=\"details\">\n            \n            <span class=\"series-title\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle), 70, options) : helperMissing.call(depth0, "truncate", ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesTitle), 70, options)))
    + "</span>\n            <span class=\"season\">Season "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seasonNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " EP "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.episodeNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </div>\n        <div class=\"controls-container\">\n            <div class=\"controls\">\n                <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player play\"></span>\n                </a>\n                <a class=\"control\" href=\"#/episode/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player info\"></span>\n                </a>\n                <a class=\"control remove\" href=\"#\">\n                    <span class=\"icon icon player x remove\"></span>\n                </a>\n            </div>\n        </div>\n    </a>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/recently-watched/movie"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div>\n\n    <a href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"progress-container\">\n            <div class=\"progress-bar\" style=\"width: ";
  if (helper = helpers.percentWatched) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentWatched); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%\"></div>\n        </div>\n        <div class=\"details\">\n            <span class=\"name\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), 75, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.name), 75, options)))
    + "</span>\n        </div>\n        <div class=\"controls-container\">\n            <div class=\"controls\">\n                <a class=\"control sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player play\"></span>\n                </a>\n                <a class=\"control\" href=\"#/movie/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"icon player info\"></span>\n                </a>\n                <a class=\"control remove\" href=\"#\">\n                    <span class=\"icon icon x player remove\"></span>\n                </a>\n            </div>\n        </div>\n    </a>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series-manager/empty-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>\n    You do not have any items in My Series Manager yet.<br />\n    When you add a series, current season episodes will automatically<br />\n    be added to My list as they become available\n</p>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series-manager/empty-not-logged-in"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>\n    Use My Series Manager to organize and view your favorite shows.<br />\n    Once you're logged in, simply select '+ADD' to add a show to My Series Manager.\n</p>\n<p>\n    Log in now to add items\n</p>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["titles/series-manager/series-item-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div>\n    <a href=\"#/series/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"details\">\n            <span class=\"name\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), 70, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.name), 70, options)))
    + "</span>\n        </div>\n    </a>\n    <div class=\"controls-container\">\n        <div class=\"controls\">\n            <a href=\"#/series/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"control info\">\n                <span class=\"icon player info\"></span>\n            </a>\n            <a class=\"control remove\">\n                <span class=\"icon x remove\"></span><br>\n            </a>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/login-form"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    </div>\n\n    <form id=\"login-form\">\n\n        <div id=\"form-error\"></div>\n\n        <div class=\"input required\">\n            <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Email Address\" />\n        </div>\n\n        <div class=\"input required\">\n            <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" />\n        </div>\n\n        <div class=\"input submit\">\n            <input type=\"submit\" class=\"primary\" name=\"submit\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.signInButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        </div>\n\n        <p><a href=\"/#/forgot-password\" id=\"forgot-pass\">Forgot password or need to create one?</a></p>\n\n        <p>\n            Already have SHOWTIME through your TV provider?<br/>\n            Go to <a href=\"http://www.showtimeanytime.com\">SHOWTIME ANYTIME</a><sup>&reg;</sup>.\n            <span class=\"has-tooltip\">\n                <img src=\"/img/ott-paywall/question-mark.png\" class=\"tooltip-ico\" />\n                <span class=\"tooltip-container\">\n                    <span class=\"tooltip-content\">\n                        <span class=\"triangle\"></span>\n                        SHOWTIME ANYTIME<sup>&reg;</sup> is available at no additional cost as part of your SHOWTIME<sup>&reg;</sup> subscription through participating TV providers. To log in to www.showtimeanytime.com or the SHOWTIME ANYTIME app, use the username/password you received from your TV provider.\n                    </span>\n                </span>\n            </span>\n        </p>\n\n    </form>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/ott-registration"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Create a New Password</h1>\n        <p class=\"body\">Please create a new password:</p>\n    </div>\n\n    <form>\n\n        <div id=\"form-error\"></div>\n\n        <div class=\"input required\">\n            <input type=\"password\" id=\"newPassword\" name=\"newPassword\" placeholder=\"Password\" />\n        </div>\n        <div class=\"input required\">\n            <input type=\"password\" id=\"newPasswordConfirmation\" name=\"newPasswordConfirmation\" placeholder=\"Confirm password\" />\n        </div>\n        <div class=\"input submit\">\n            <input type=\"submit\" class=\"primary\" value=\"Continue\" />\n        </div>\n    </form>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/request-password-reset-completed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Check your inbox</h1>\n        <p class=\"body\">If your email address is in our records, we've sent you an email with a link to reset your password.</p>\n    </div>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/request-password-reset"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Need a new password?</h1>\n        <p class=\"body\">Enter your email address and we'll send you instructions on how to create a new password:</p>\n    </div>\n\n    <div class=\"error\" id=\"form-error\"></div>\n\n    <form>\n        <div class=\"input required\">\n            <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email Address\" />\n        </div>\n        <div class=\"input submit\">\n            <input type=\"submit\" value=\"Continue\" class=\"primary\" />\n        </div>\n\n        <p>Forgot your email address? <a target=\"_blank\" href=\"https://cbsi.secure.force.com/CBSi/articles/FAQ/I-forgot-my-email-and-or-password-What-do-I-do?retURL=%2FCBSi%2Fapex%2FottShoViewAll%3Fcategories%3DCBS_Interactive%253AshoTroubleshooting%26template%3DottShoTemplate&popup=false&categories=CBS_Interactive%3AshoTroubleshooting&template=ottShoTemplate&referer=sho.com/ott\">Click here</a></p>\n    </form>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/reset-password-success"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Password Changed</h1>\n        <p class=\"body\">We changed your password and logged you in. Go ahead and start watching!</p>\n    </div>\n    <p><a href=\"/\" class=\"btn primary\">Start Watching</a></p>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["auth/reset-password"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Create a new password</h1>\n        <p class=\"body\">Please create a new password:</p>\n    </div>\n\n    <form>\n        <div id=\"form-error\"></div>\n\n        <div class=\"input required\">\n            <input type=\"password\" id=\"newPassword\" name=\"newPassword\" placeholder=\"Password\" />\n        </div>\n        <div class=\"input required\">\n            <input type=\"password\" id=\"newPasswordConfirmation\" name=\"newPasswordConfirmation\" placeholder=\"Confirm password\" />\n        </div>\n        <div class=\"input submit\">\n            <input type=\"submit\" class=\"primary\" value=\"Continue\" />\n        </div>\n    </form>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["layouts/full-screen"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["modals/modal-layout-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        ";
  if (helper = helpers.modalView) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalView); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"sho-modal-footer\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <a class=\"button primary\" data-callback=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" href=\"#\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a>\n            ";
  return buffer;
  }

  buffer += "<div class=\"sho-modal-header\">\n    <h1 class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <a class=\"close button\" href=\"#\">Close</a>\n</div>\n<div class=\"sho-modal-content content-section\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.modalView), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["billing/update"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"content-section\">\n        <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<form id=\"payment-method-card\">\n   <!-- Update Message -->\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <!-- Payment Method Selection -->\n    <div class=\"content-section\">\n        <label>Accepted:</label>\n    </div>\n\n\n    <div class=\"content-section\">\n\n        <!-- Credit Card Info -->\n        <div class=\"col-5\">\n            <div class=\"form-item-group\">\n                <label for=\"firstName\">First Name:</label>\n                <input type=\"text\" name=\"firstName\" data-recurly=\"first_name\" value=\"\" id=\"firstName\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"lastName\">Last Name:</label>\n                <input type=\"text\" name=\"lastName\" data-recurly=\"last_name\" value=\"\" id=\"lastName\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"cardNumber\">Card Number:</label>\n                <input type=\"text\" id=\"number\" data-recurly=\"number\">\n            </div>\n            <div class=\"form-item-group\">\n                <label>Expiration:</label>\n                <input type=\"text\" class=\"half-size\" id=\"month\" data-recurly=\"month\">\n                <input type=\"text\" class=\"half-size\" id=\"year\" data-recurly=\"year\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"securityCode\">CVC Code:</label>\n                <input type=\"text\" class=\"half-size\" id=\"cvv\" data-recurly=\"cvv\">\n            </div>\n        </div>\n\n\n        <!-- Billing Address -->\n        <div class=\"col-5\">\n            <div class=\"form-item-group\">\n                <label for=\"address\">Address:</label>\n                <input type=\"text\" name=\"address\" data-recurly=\"address1\" value=\"\" id=\"address\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"city\">City:</label>\n                <input type=\"text\" name=\"city\" data-recurly=\"city\" value=\"\" id=\"city\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"state\">State:</label>\n                <input type=\"text\" name=\"state\" data-recurly=\"state\" value=\"\" id=\"state\">\n            </div>\n            <div class=\"form-item-group\">\n                <label for=\"zipcode\">Zip Code:</label>\n                <input type=\"text\" name=\"zipcode\" data-recurly=\"postal_code\" value=\"\" id=\"zipcode\">\n            </div>\n        </div>\n\n        <input type=\"hidden\" name=\"token\" data-recurly=\"token\">\n        <input type=\"hidden\" name=\"country\" data-recurly=\"country\" value=\"USA\" id=\"country\">\n    </div>\n\n    <p class=\"fine-print\">\n        By clicking \"Update Payment Method\", you authorize us to continue your month-to-month Showtime subscription (currently ";
  if (helper = helpers.subscription) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subscription); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ") automatically, charged monthly to the payment method provided, until you cancel. To cancel, go to \"Subscription & Billing\" and click on \"Cancel Subscription.\" No refunds or credits for partial months.\n    </p>\n\n    <div class=\"content-section\">\n        <div class=\"form-item-group\">\n            <input type=\"submit\" class=\"button primary\" value=\"Update Payment Method\">\n            <input type=\"button\" value=\"Prepopulate\" class=\"button plain\" id=\"prepop\">\n        </div>\n    </div>\n\n\n</form>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<article class=\"general-page legal-page\" id=\"page-terms\">\n    <section class=\"page-content\">\n        <div class=\"page-title\">\n            <h1>404: Page Not Found</h1>\n        </div>\n        <div class=\"page-body\">\n            This is awkward... we couldn't find the page you requested.\n        </div>\n    </section>\n</article>";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/home-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>HOME PAGE!</h1>\n<h2>Yeah!</h2>\n\n<h3>Watch Showtime Wherever and Whenever You Want</h3>\n\n<h4>Start your 7-day free trial now</h4>\n\n<p>Only $9.99/month. Cancel anytime. <a href=\"#\">Learn more.</a></p>\n\n<a href=\"#/trial\" class=\"btn\" id=\"btn-start-trial\">Start Your Trial</a>\n<a href=\"#/login\" class=\"btn\" id=\"main-login-button\">Log In</a>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/email-complete"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-container promo-text\" id=\"email-complete\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">Thank You</h1>\n        <p class=\"body\">Thank you for signing up to receive updates. We just sent you a confirmation email and are excited to share more news with you soon.</p>\n    </div>\n    <div class=\"cta-buttons\">\n        <a href=\"/#/\" class=\"btn primary\">Return to Showtime</a>\n    </div>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"hero-image-container\">\n    <span id=\"hero-mobile-shade\"></span>\n    <div id=\"hero-image-shade\" class=\"horiz-shade\"></div>\n    <div class=\"hero-image\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywallContent)),stack1 == null || stack1 === false ? stack1 : stack1.heroImages)),stack1 == null || stack1 === false ? stack1 : stack1.base)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>\n    <div class=\"hero-image blur\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywallContent)),stack1 == null || stack1 === false ? stack1 : stack1.heroImages)),stack1 == null || stack1 === false ? stack1 : stack1.blur)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>\n    <div class=\"hero-image mobile\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywallContent)),stack1 == null || stack1 === false ? stack1 : stack1.heroImages)),stack1 == null || stack1 === false ? stack1 : stack1.mobile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>\n</div>\n\n<div id=\"paywall-content-wrapper\">\n    <div id=\"paywall-content\">\n        <a href=\"/#/\" class=\"sho-logo\"><img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" /></a>\n        <div id=\"paywall-view-content\"></div>\n    </div>\n</div>\n\n<footer id=\"paywall-footer-wrapper\">\n    <div id=\"paywall-footer\">\n        <div class=\"legal\">\n            <p>";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.dictionary)),stack1 == null || stack1 === false ? stack1 : stack1.legal)),stack1 == null || stack1 === false ? stack1 : stack1.footer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n            <p class=\"home-legal em\">*You will not be charged for the SHOWTIME streaming service during the free trial period (the first 30 days of your subscription). TO CANCEL YOUR SUBSCRIPTION AND AVOID BEING CHARGED, YOU MUST CANCEL BEFORE THE END OF THE FREE TRIAL PERIOD. To keep your subscription once your trial period is over, you will not have to do anything. Free trial, price and device availability may vary by participating subscription providers.</p>\n            <p class=\"home-legal\">SHOWTIME is accessible for viewing solely in the United States and its territories and possessions. Minimum high-speed broadband connection is required for viewing. iPhone, iPad, and Apple TV are registered trademarks of Apple Inc. Roku and the Roku logo are trademarks and/or registered trademarks of Roku, Inc. in the United States and other countries. PlayStation is a trademark of Sony Computer Entertainment, Inc. Hulu is a registered trademark of Hulu, LLC.</p>\n        </div>\n    </div>\n</footer>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["registration/complete-profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"cta-container\">\n    <span class=\"dash\"></span>\n    <div class=\"cta-copy\">\n        <h1 class=\"headline\">Welcome! Your Showtime 7-day trial has begun.</h1>\n        <p class=\"body\">Your Account Info:</p>\n    </div>\n</div>\n\n<div id=\"subscription-info\">\n    <ul>\n        <li>Email: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.emailAddress)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>Payment: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.subscription)),stack1 == null || stack1 === false ? stack1 : stack1.paymentMethod)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>Subscription: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.subscription)),stack1 == null || stack1 === false ? stack1 : stack1.subscription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    </ul>\n    <p>Cancel anytime before "
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.subscription)),stack1 == null || stack1 === false ? stack1 : stack1.nextBillingDate), "MMMM D YYYY", options) : helperMissing.call(depth0, "moment", ((stack1 = (depth0 && depth0.subscription)),stack1 == null || stack1 === false ? stack1 : stack1.nextBillingDate), "MMMM D YYYY", options)))
    + " and you will not be charged. After your trial ends, you subscription will automatically continue.</p>\n</div>\n\n<form id=\"profile-form\">\n    <h2>Add Profile Info (Optional):</h2>\n\n    <div class=\"row\">\n        <div class=\"input\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" name=\"firstName\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" name=\"lastName\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input\">\n            <label><input type=\"radio\" name=\"gender\" value=\"Male\" /> Male</label>\n            <label><input type=\"radio\" name=\"gender\" value=\"Female\" /> Female</label>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input\">\n            <label for=\"firstName\">Birthdate</label>\n            <input type=\"text\" name=\"dob\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <button type=\"submit\" class=\"primary\">Submit</button>\n        <a href=\"/#/home\" class=\"btn\" id=\"btn-skip\">Skip for Now</a>\n    </div>\n</form>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["registration/create-account-form"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"cta-container\">\n    <span class=\"dash\"></span>\n    <div class=\"cta-copy\">\n        <h1 class=\"headline\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <p class=\"body\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n</div>\n\n<div id=\"form-error\"></div>\n\n<form id=\"reg-start-form\">\n    <div class=\"row\">\n        <div class=\"input input-lg required\">\n            <input type=\"text\" id=\"email\" placeholder=\"Email Address\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input input-lg required\">\n            <input type=\"password\" id=\"password\" placeholder=\"Password\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input input-lg required\">\n            <input type=\"password\" id=\"confirm-password\" placeholder=\"Confirm Password\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"input input-lg input-checkbox\">\n            <label><input type=\"checkbox\" checked=\"checked\" /> I have read and agree to the Terms of Use, Privacy Policy, and Video Services Policy. I agree to receive updates, alerts and promotions from SHOWTIME.</label>\n        </div>\n    </div>\n\n    <div class=\"row input\">\n        <button type=\"submit\" class=\"primary\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.continueButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n    </div>\n</form>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["player/flash-player-not-installed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Adobe Flash Player is required to watch programs on Showtime Anytime. To continue, please visit <a href=\"http://get.adobe.com/flashplayer\" class=\"sho-link\" target=\"_blank\">get.adobe.com/flashplayer</a></p>\n\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["player/player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"player-blocker\">\n    <div id=\"player-inner\"></div><div id=\"player-loader\"></div>\n</div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["subscription/cancel-modal-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Click \"Finish Cancellation\" below to cancel your subscription.</p>\n<p>The cancellation will be effective at the end of your current billing period of ";
  if (helper = helpers.nextBillingDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nextBillingDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ". Your viewing preference and history will be saved for 12 months if you decide to restart your subscription</p>\n<div class=\"sho-modal-footer\">\n    <a href=\"#\" class=\"button primary\" id=\"finish-cancellation\">Finish Cancellation</a>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["subscription/details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"content-section\">\n    ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "<a href=\"#/account/subscription/cancel\"  id=\"cancel-subscription\" class=\"button\">Cancel Subscription</a>";
  }

function program5(depth0,data) {
  
  
  return "<a href=\"#/account/subscription/history\" id=\"view-billing-history\" class=\"button\">View billing history</a>";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a href=\"";
  if (helper = helpers.updateBillingInfoLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updateBillingInfoLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"update-payment-info\" class=\"button\">";
  if (helper = helpers.updateBillingInfoText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updateBillingInfoText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <p>";
  if (helper = helpers.updateBillingInfoText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updateBillingInfoText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n            ";
  return buffer;
  }

  buffer += "<div class=\"panel-header\">\n    <h1>Subscription</h1>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"content-section subscription-list\">\n    <ul>\n        <li class=\"list-item-group\">\n            <label>Subscription:</label><span>";
  if (helper = helpers.subscription) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subscription); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            <!--";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.billingType), "===", "BACON", options) : helperMissing.call(depth0, "is", (depth0 && depth0.billingType), "===", "BACON", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n        </li>\n        <li class=\"list-item-group\">\n            <label>Next billing date:</label><span>";
  if (helper = helpers.nextBillingDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nextBillingDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            <!--";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.billingType), "===", "BACON", options) : helperMissing.call(depth0, "is", (depth0 && depth0.billingType), "===", "BACON", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n        </li>\n        <li class=\"list-item-group\"><label>Payment Method:</label><span>";
  if (helper = helpers.paymentMethod) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.paymentMethod); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.updateBillingInfoLink), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n    </ul>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["subscription/transactions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <tr>\n                    <td>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                </tr>\n            ";
  return buffer;
  }

  buffer += escapeExpression(helpers.log.call(depth0, depth0, {hash:{},data:data}))
    + "\n<div class=\"content-section\">\n    <div class=\"float-left\">\n        <label>Next billing date:</label>\n        <span>";
  if (helper = helpers.nextBillingDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nextBillingDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n    <div class=\"float-right\">\n        <label>Last charge:</label>\n        <span>5/12/2015</span>\n    </div>\n</div>\n<div class=\"content-section\">\n    <table class=\"billing-history\">\n        <thead>\n            <th>Billing Date</th>\n            <th>Description</th>\n            <th>Charge</th>\n        </thead>\n        <tbody id=\"history-list\">\n            <tr>\n                <td>\n                    5/12/2015\n                </td>\n                <td>\n                    Visa ending in 8888\n                </td>\n                <td>\n                    $9.99\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    4/12/2015\n                </td>\n                <td>\n                    Visa ending in 8888\n                </td>\n                <td>\n                    $9.99\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    3/12/2015\n                </td>\n                <td>\n                    Visa ending in 8888\n                </td>\n                <td>\n                    $9.99\n                </td>\n            </tr>\n\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.transactions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/delete-user-confirmation-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<img class=\"logo\" src=\"common/img/logos/showtime-anytime-logo.png\">\n<p>You have successfully deleted your Showtime account and profile.</p>\n<p>We are sorry to see you go.</p>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/reauthenticate-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>For your security, please confirm your password.</p>\n\n<form>\n    <div class=\"form-item-group\">\n        <label>Email:</label>\n        <input type=\"email\" value=\"";
  if (helper = helpers.emailAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hide-input-styles\" readonly/>\n    </div>\n\n    <div class=\"form-item-group\">\n        <label>Password:</label>\n        <input type=\"password\" name=\"password\" id=\"reauthenticate-password\" />\n        <span id=\"form-error\"></span>\n    </div>\n\n    <div class=\"form-item-group buttons\">\n        <input type=\"submit\" value=\"Continue\" class=\"button primary\" />\n        <input type=\"button\" value=\"Close\" class=\"button plain\" />\n\n    </div>\n</form>\n\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/unsubscribe"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"copy\">\n                    <h1 class=\"headline\">Sucessfully Unsubscribed</h1>\n                    <p class=\"body\">You've sucessfully unsubscribed from SHOWTIME ";
  if (helper = helpers.mailingListName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mailingListName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                </div>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"copy\">\n                    <h1 class=\"headline\">Still want to<br />unsubscribe?</h1>\n                    <p class=\"body\">Are you sure you want to unsubscribe ";
  if (helper = helpers.emailAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " from SHOWTIME ";
  if (helper = helpers.mailingListName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mailingListName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " email?</p>\n                </div>\n                <form>\n                    <div id=\"form-error\"></div>\n                    <div class=\"input submit\">\n                        <input type=\"submit\" class=\"primary button\" value=\"UNSUBSCRIBE\" />\n                    </div>\n                </form>\n            ";
  return buffer;
  }

  buffer += "\n\n\n<article class=\"legal-page\">\n    <img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" class=\"sho-logo\" />\n    <section class=\"page-content\">\n        <div class=\"content-container promo-text\">\n            <span class=\"dash\"></span>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unsubscribed), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </section>\n</article>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["widgets/carousel-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a class=\"simple button sho-play-link\" data-play-title-id=\"";
  if (helper = helpers.titleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#/play/";
  if (helper = helpers.titleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"icon icon-sm player play\"></span>Play Now</a>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <a class=\"simple button see-all\" href=\"/#/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEpisode), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "TITLE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "TITLE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "series/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.series)),stack1 == null || stack1 === false ? stack1 : stack1.seriesId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "movies";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "All ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEpisode), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "Episodes";
  }

function program11(depth0,data) {
  
  
  return "Movies";
  }

  buffer += "<div class=\"horiz-shade\"></div>\n<div class=\"slide-detail cycle-overlay\">\n    <div class=\"promo-text\">\n        <span class=\"dash\"></span>\n        <a href=\"/#/";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"copy\">\n            <div class=\"headline\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <p class=\"body\">";
  if (helper = helpers.subTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </a>\n        <div class=\"buttons\">\n            ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "TITLE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "TITLE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a class=\"simple button info-button\" href=\"/#/";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">More Info</a>\n            ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "TITLE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.type), "TITLE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["widgets/carousel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\"\n     data-cycle-fx=\"scrollHorz\"\n     data-cycle-slides=\"> div\"\n     data-cycle-pager=\".carousel-pager\">\n\n\n</div>\n<div class=\"carousel-pager cycle-overlay\"></div>\n<div class=\"carousel-pager-shade\"></div>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["navigation/header/header-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav id=\"primary-nav\"></nav>\n\n<div id=\"header-actions\">\n    <a href=\"#\" id=\"search-icon\"><img src=\"/img/icons/search.png\"></a>\n    <div id=\"search-wrapper\">\n        <input name=\"q\" id=\"search-query\" placeholder=\"Search\" >\n        <a class=\"search-btn\" href=\"#\"><img src=\"/img/icons/search.png\"></a>\n    </div>\n    <div class=\"account-menu\">\n        <a class=\"account-menu-topLevel\" href=\"#/account\"></a>\n\n        <div class=\"dropdown-wrapper\">\n            <span class=\"triangleRight outline\"></span>\n            <span class=\"triangleRight\"></span>\n            <nav>\n                <div class=\"subMenuType\">\n                    <ul>\n                        <li><a href=\"#/account\">Email &amp; Password</a></li>\n                        <li><a href=\"#/account/personal-info\">Personal Info</a></li>\n                        <li><a href=\"#/account/subscription\">Subscription</a></li>\n                        <li><a href=\"#/account/viewing-restrictions\">Viewing Restrictions</a></li>\n                        <li><a href=\"#/account/email-newsletters\">Email Preferences</a></li>\n                        <li><a href=\"#/my-devices\">Manage Devices</a></li>\n                        <li><a target=\"_blank\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customerService)),stack1 == null || stack1 === false ? stack1 : stack1.helpCenter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Help Center</a></li>\n                    </ul>\n                </div>\n                <div class=\"subMenuType\">\n                    <ul>\n                        <li><a href=\"/\" class=\"logout\">Sign Out</a></li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/home/default"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n        <p class=\"body\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    </div>\n    <div class=\"cta-buttons\">\n        <a href=\"#\" class=\"btn primary\" id=\"cta-button\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.buyButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/home/dialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"page-actions\">\n    <a href=\"#\" class=\"btn\" id=\"logout-button\">Sign Out</a>\n</div>\n<div class=\"content-container promo-text\">\n    <span class=\"dash\"></span>\n    <div class=\"copy\">\n        <h1 class=\"headline\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n        <p class=\"body\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    </div>\n\n    <ul class=\"partner-panels panel-lg\">\n        <li id=\"partner-apple\">\n            <div class=\"contents\">\n                <img src=\"/img/ott-paywall/apple-logo.svg\" class=\"logo\" />\n                <p>Subscribe with iTunes on your iPhone<sup>&reg;</sup>, iPad<sup>&reg;</sup> and Apple TV<sup>&reg;</sup></p>\n                <a href=\"https://itunes.apple.com/app/id996246479\" class=\"partner-cta\"><img src=\"/img/ott-paywall/app-store-desktop.png\" class=\"app-store\" /></a>\n            </div>\n        </li>\n        <li id=\"partner-roku\">\n            <div class=\"contents\">\n                <img src=\"/img/ott-paywall/roku-logo.svg\" class=\"logo\" />\n                <p>Subscribe with Roku on your Roku<sup>&reg;</sup> players and Roku TV<sup>&trade;</sup></p>\n                <a href=\"https://owner.roku.com/add/showtime\" class=\"partner-cta btn\">Add Channel on Roku.com</a>\n            </div>\n        </li>\n    </ul>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/legal/eula"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<article class=\"general-page legal-page\" id=\"page-terms\">\n    <div class=\"page-actions\">\n        <a href=\"#\" class=\"btn close-window\">Close Window</a>\n    </div>\n    <img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" class=\"sho-logo\" />\n    <nav class=\"section-nav\">\n        <ul>\n            <li><a href=\"#/termsAndConditions\">Terms of Use</a></li>\n            <li><a href=\"#/privacy\">Privacy Policy</a></li>\n            <li><a href=\"#/videoServicesPolicy\">Video Services Policy</a></li>\n            <li class=\"active\"><a href=\"#/eula\">Showtime Mobile App End User License Agreement</a></li>\n        </ul>\n    </nav>\n    <section class=\"page-content\">\n        <div class=\"page-title\">\n            <h1>Showtime Mobile App End User License Agreement</h1>\n        </div>\n        <div class=\"page-body\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </section>\n</article>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/legal/privacy"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<article class=\"general-page legal-page\" id=\"page-terms\">\n    <div class=\"page-actions\">\n        <a href=\"#\" class=\"btn close-window\">Close Window</a>\n    </div>\n    <img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" class=\"sho-logo\" />\n    <nav class=\"section-nav\">\n        <ul>\n            <li><a href=\"#/termsAndConditions\">Terms of Use</a></li>\n            <li class=\"active\"><a href=\"#/privacy\">Privacy Policy</a></li>\n            <li><a href=\"#/videoServicesPolicy\">Video Services Policy</a></li>\n            <li><a href=\"#/eula\">Showtime Mobile App End User License Agreement</a></li>\n        </ul>\n    </nav>\n    <section class=\"page-content\">\n        <div class=\"page-title\">\n            <h1>Privacy Policy</h1>\n        </div>\n        <div class=\"page-body\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </section>\n</article>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/legal/terms"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<article class=\"general-page legal-page\" id=\"page-terms\">\n    <div class=\"page-actions\">\n        <a href=\"#\" class=\"btn close-window\">Close Window</a>\n    </div>\n    <img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" class=\"sho-logo\" />\n    <nav class=\"section-nav\">\n        <ul>\n            <li class=\"active\"><a href=\"#/termsAndConditions\">Terms of Use</a></li>\n            <li><a href=\"#/privacy\">Privacy Policy</a></li>\n            <li><a href=\"#/videoServicesPolicy\">Video Services Policy</a></li>\n            <li><a href=\"#/eula\">Showtime Mobile App End User License Agreement</a></li>\n        </ul>\n    </nav>\n    <section class=\"page-content\">\n        <div class=\"page-title\">\n            <h1>Showtime Terms of Use</h1>\n        </div>\n        <div class=\"page-body\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </section>\n</article>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["pages/legal/video-services"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<article class=\"general-page legal-page\" id=\"page-terms\">\n    <div class=\"page-actions\">\n        <a href=\"#\" class=\"btn close-window\">Close Window</a>\n    </div>\n    <img src=\"/img/ott-paywall/showtime_logo_paywall.svg\" alt=\"Showtime\" class=\"sho-logo\" />\n    <nav class=\"section-nav\">\n        <ul>\n            <li><a href=\"#/termsAndConditions\">Terms of Use</a></li>\n            <li><a href=\"#/privacy\">Privacy Policy</a></li>\n            <li class=\"active\"><a href=\"#/videoServicesPolicy\">Video Services Policy</a></li>\n            <li><a href=\"#/eula\">Showtime Mobile App End User License Agreement</a></li>\n        </ul>\n    </nav>\n    <section class=\"page-content\">\n        <div class=\"page-title\">\n            <h1>Video Services Policy</h1>\n        </div>\n        <div class=\"page-body\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </section>\n</article>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/unauth-home/bacon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"cta-container\">\n    <span class=\"dash\"></span>\n    <div class=\"cta-copy\">\n        <h1 class=\"headline\">";
  if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <p class=\"body\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n\n    <div class=\"cta-buttons\">\n        <a href=\"/#/signup\" class=\"btn primary\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.signUpButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        <a href=\"/#/login\" class=\"btn\" id=\"btn-login\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.signInButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    </div>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["paywall/unauth-home/default"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " device-desktop ";
  }

function program3(depth0,data) {
  
  
  return " device-mobile ";
  }

function program5(depth0,data) {
  
  
  return " device-supported ";
  }

function program7(depth0,data) {
  
  
  return " device-unsupported ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"page-actions shd\">\n            <a href=\"/#/signin\" class=\"btn min-width\" id=\"btn-login\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.signInButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        </div>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n                        <br />\n                        Purchase directly from the SHOWTIME app on:\n                    ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"shd\">\n                <ul class=\"partner-panels\">\n                    <li id=\"partner-apple\">\n                        <div class=\"contents off-state\">\n                            <p class=\"partner-head\">Apple</p>\n                            iPhone<sup>&reg;</sup>, iPad<sup>&reg;</sup> and Apple TV<sup>&reg;</sup>\n                        </div>\n                        <div class=\"contents hover-state\">\n                            <p>Subscribe with iTunes</p>\n                            <a href=\"https://itunes.apple.com/app/id996246479\" class=\"partner-cta\" id=\"apple-exit\" target=\"_blank\"><img src=\"/img/ott-paywall/app-store-desktop.png\" /></a>\n                        </div>\n                    </li>\n                    <li id=\"partner-roku\">\n                        <div class=\"contents off-state\">\n                            <img src=\"/img/ott-paywall/roku-logo.svg\" class=\"logo\" />\n                            Roku<sup>&reg;</sup> players and Roku TV<sup>&trade;</sup>\n                        </div>\n                        <div class=\"contents hover-state\">\n                            <p>Subscribe with Roku</p>\n                            <a href=\"https://owner.roku.com/add/showtime\" class=\"partner-cta btn\" id=\"roku-exit\" target=\"_blank\">Add Channel on Roku.com</a>\n                        </div>\n                    </li>\n                </ul>\n                <a href=\"#\" id=\"btn-start-trial\" class=\"btn primary\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.buttons)),stack1 == null || stack1 === false ? stack1 : stack1.buyButton)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n            </div>\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"shm\">\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isSupportedMobile), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <div id=\"mobile-start-trial\">\n                        <h2>Start your 30-day free trial.</h2>\n                        <ul class=\"buttons\">\n                            <li><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.kochava)),stack1 == null || stack1 === false ? stack1 : stack1.iosDownload)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn-mobile btn-app-store\">Download on the App Store</a></li>\n                            <li><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.kochava)),stack1 == null || stack1 === false ? stack1 : stack1.iosOpen)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn-mobile btn-open-app\">Open the App</a></li>\n                        </ul>\n                    </div>\n                    ";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "\n                        <p id=\"mobile-unsupported-intro\">\n                            The SHOWTIME app is not available on this device.\n                        </p>\n                        <p><a href=\"#\" id=\"btn-unsup-learnmore\" class=\"btn primary\">Learn More</a></p>\n                    ";
  }

function program20(depth0,data) {
  
  
  return "\n            <div id=\"learn-more-stat\" class=\"shd\">\n                <p><a href=\"http://www.sho.com/sho/order/5/ott?i_cid=int-default-1126\" target=\"_blank\">Learn More</a> about other new ways to get SHOWTIME:</p>\n                <img src=\"/img/ott-paywall/welcome/providers/hulu.png\" /> <img src=\"/img/ott-paywall/welcome/providers/playstationvue.png\" />\n            </div>\n\n            <div id=\"scroll-cta\" class=\"shd\">Scroll Down</div>\n        ";
  }

function program22(depth0,data) {
  
  
  return "<span id=\"scroll-cta-mobile\"></span>";
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"shsup\" id=\"get-trial\">\n                    <div class=\"copy\">\n                        <div class=\"showtime-logo\"></div>\n                        <h1 class=\"headline\">Get the Showtime App to START YOUR 30-DAY FREE TRIAL<sup class=\"supLarge\">*</sup></h1>\n                        <p class=\"body\">Only $10.99 per month after your FREE trial. Buy SHOWTIME directly from one device and watch on any supported device – including your computer.</p>\n                    </div>\n                    <ul class=\"partner-panels panel-lg\">\n                        <li id=\"partner-apple\">\n                            <div class=\"contents\">\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isMobile), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                <p class=\"shd\">Subscribe with iTunes on your iPhone<sup>&reg;</sup>, iPad<sup>&reg;</sup> and Apple TV<sup>&reg;</sup></p>\n                            </div>\n                        </li>\n                        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                </div>\n                ";
  return buffer;
  }
function program25(depth0,data) {
  
  
  return "\n                                    <a href=\"https://itunes.apple.com/app/id996246479\" class=\"partner-cta\" target=\"_blank\"><img src=\"/img/ott-paywall/app-store-desktop.png\" class=\"app-store\" /></a>\n                                ";
  }

function program27(depth0,data) {
  
  
  return "\n                                    <a href=\"#\" class=\"btn-mobile btn-app-store\">Download on the App Store</a>\n                                ";
  }

function program29(depth0,data) {
  
  
  return "\n                        <li id=\"partner-roku\" class=\"shd\">\n                            <div class=\"contents\">\n                                <a href=\"https://owner.roku.com/add/showtime\" class=\"partner-cta btn\" target=\"_blank\">Add Channel on <img src=\"/img/ott-paywall/roku-logo.svg\" class=\"logo\" /></a>\n                                <p>Subscribe with Roku on your Roku<sup>&reg;</sup> players and Roku TV<sup>&trade;</sup></p>\n                            </div>\n                        </li>\n                        ";
  }

  buffer += "<div class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isMobile), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isSupportedMobile), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n\n    <div id=\"front-door-main\">\n\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div class=\"content-container promo-text\">\n            <span class=\"dash\"></span>\n            <div class=\"copy\">\n                <h1 class=\"headline\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.headline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n                <p class=\"body\">\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </p>\n            </div>\n\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isMobile), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktop), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isSupportedMobile), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div id=\"front-door-content\">\n        <div class=\"content-panel shsup\" id=\"panel-series\">\n            <div class=\"container\">\n                <div class=\"copy\">\n                    <h1 class=\"headline\">WATCH EVERY SEASON OF OUR AWARD-WINNING ORIGINAL SERIES</h1>\n                    <p class=\"body\">Get commercial-free, unlimited access to new and classic series like Homeland, Ray Donovan, Shameless, Masters of Sex, The Affair, Penny Dreadful, Dexter<sup>&reg;</sup> and Weeds. </p>\n                    <p><a href=\"#\" class=\"btn open-more\">SEE ALL ORIGINAL SERIES</a></p>\n                </div>\n\n                <div class=\"title-grid series-grid mod-shadow\">\n                    <ul>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-homeland.jpg\" alt=\"Homeland\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-ray.jpg\" alt=\"Ray Donovan\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-penny.jpg\" alt=\"Penny Dreadful\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-houseoflies.jpg\" alt=\"House of Lies\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-masters.jpg\" alt=\"Masters of Sex\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-dexter.jpg\" alt=\"Dexter &reg;\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-affair.jpg\" alt=\"The Affair\" /></div></li>\n                        <li><div><img src=\"/img/ott-paywall/series/seriesart_280x158-shameless.jpg\" alt=\"Shameless\" /></div></li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"more-container\">\n                <div class=\"shade\"></div>\n                <div class=\"more\">\n                    <div class=\"header\">\n                        <a href=\"#\" class=\"close close-more\">Close</a>\n                        <h1 class=\"title\">Showtime Original Series</h1>\n                        <a href=\"#\" class=\"close close-more mobile-close\">Back</a>\n                    </div>\n                    <div class=\"content\">\n                        <p><strong>Watch all-new episodes and full seasons</strong></p>\n                        <div class=\"full-series-list col-list\">\n                            <ul class=\"col\">\n                                <li>The Affair</li>\n                                <li>The Borgias</li>\n                                <li>Brotherhood</li>\n                                <li>Californication</li>\n                                <li>Dexter</li>\n                                <li>Episodes</li>\n                                <li>Fat Actress</li>\n                                <li>Gigolos</li>\n                                <li>The Green Room with Paul Provenza</li>\n                                <li>HAPPYish</li>\n                                <li>Homeland</li>\n                                <li>House of Lies</li>\n                                <li>Inside Comedy</li>\n                                <li>Jim Rome on SHOWTIME</li>\n                                <li>The L Word</li>\n                                <li>Masters of Sex</li>\n                                <li>Nurse Jackie</li>\n                                <li>Oliver Stone’s Untold History of the United States</li>\n                                <li>Penn & Teller Bullsh#t!</li>\n                            </ul>\n                            <ul class=\"col\">\n                                <li>Penny Dreadful</li>\n                                <li>Polyamory: Married & Dating</li>\n                                <li>Queer as Folk</li>\n                                <li>Ray Donovan</li>\n                                <li>The Real L Word</li>\n                                <li>Secret Diary of a Call Girl</li>\n                                <li>Sleeper Cell</li>\n                                <li>This American Life</li>\n                                <li>Time of Death</li>\n                                <li>Tracey Ullman’s State of the Union</li>\n                                <li>The Tudors</li>\n                                <li>United States of Tara</li>\n                                <li>Web Therapy</li>\n                                <li>Weeds</li>\n                                <li>Years of Living Dangerously</li>\n                                <li>3AM</li>\n                                <li>60 Minutes Sports</li>\n                                <li>7 Deadly Sins</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-panel shsup\" id=\"panel-movies\">\n            <div class=\"container\">\n                <div class=\"copy\">\n                    <h1 class=\"headline\">GET THE LATEST HIT MOVIES, DOCUMENTARIES, SPORTS AND MORE</h1>\n                    <p class=\"body\">Watch the hottest movies featuring the biggest stars plus exclusive documentaries, revealing reality series, hilarious comedy specials and hard-hitting sports.</p>\n                    <p><a href=\"#\" class=\"btn open-more\">See Featured Movies and More</a></p>\n                </div>\n\n                <div class=\"title-grid featured-grid mod-shadow\">\n                    <ul>\n                        <li class=\"movie\"><div><img src=\"/img/ott-paywall/featured/movieart_216x324-boyhood.jpg\" alt=\"Boyhood\" /></div></li>\n                        <li class=\"movie\"><div><img src=\"/img/ott-paywall/featured/movieart_216x324-kobemuse.jpg\" alt=\"Kobe Bryants Muse\" /></div></li>\n                        <li class=\"movie\"><div><img src=\"/img/ott-paywall/featured/movieart_216x324-lastvegas.jpg\" alt=\"Last Vegas\" /></div></li>\n                        <li class=\"box\"><div><img src=\"/img/ott-paywall/featured/movieart_432x324-ShoBoxing.jpg\" alt=\"Showtime Championship Boxing\" /></div></li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"more-container\">\n                <div class=\"shade\"></div>\n                <div class=\"more\">\n                    <div class=\"header\">\n                        <a href=\"#\" class=\"close close-more\">Close</a>\n                        <h1 class=\"title\">Featured Movies and More</h1>\n                        <a href=\"#\" class=\"close close-more mobile-close\">Back</a>\n                    </div>\n                    <div class=\"content\">\n                        <ul class=\"full-movie-list\">\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-boyhood.jpg\" /><span>Boyhood</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-snowpiercer.jpg\" /><span>Snowpiercer</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-kobemuse.jpg\" /><span>Kobe Bryant's Muse</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-lastvegas.jpg\" /><span>Last Vegas</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-needforspeed.jpg\" /><span>Need for Speed</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-beginagain.jpg\" /><span>Begin Again</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-vampire.jpg\" /><span>Vampire Academy</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-publicenemy.jpg\" /><span>Public Enemy</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-philomena.jpg\" /><span>Philomena</span></li>\n                            <li><img src=\"/img/ott-paywall/featured/movieart_216x324-onedirection.jpg\" /><span>One Direction - Where We Are...</span></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-panel shsup\" id=\"panel-watch-live\">\n            <div class=\"container\">\n                <div class=\"copy\">\n                    <h1 class=\"headline\">STREAM LIVE – WHEREVER YOU ARE </h1>\n                    <p class=\"body\">Watch what's currently airing live on SHOWTIME, including series premieres and the biggest names in boxing.</p>\n                </div>\n                <img src=\"/img/ott-paywall/welcome/boxing-desktop.png\" class=\"boxing-inset\" />\n            </div>\n        </div>\n\n        <div class=\"content-panel shsup\" id=\"panel-devices\">\n            <div class=\"container\">\n                <div class=\"copy\">\n                    <h1 class=\"headline\">WATCH ON ANY SUPPORTED DEVICE NO MATTER WHERE YOU SUBSCRIBE</h1>\n                    <p class=\"body\">Subscribe through the SHOWTIME app and you can watch on any supported device: Apple TV<sup>&reg;</sup>, iPad<sup>&reg;</sup>, iPhone<sup>&reg;</sup>, Roku<sup>&reg;</sup> players, Roku TV<sup>&trade;</sup> and on your computer.</p>\n                    <p><a href=\"#\" class=\"btn open-more\">SEE All supported Devices</a></p>\n                </div>\n                <div class=\"devices-inset-container\">\n                    <div class=\"devices-inset\"></div>\n                </div>\n            </div>\n\n            <div class=\"more-container\">\n                <div class=\"shade\"></div>\n                <div class=\"more\">\n                    <div class=\"header\">\n                        <a href=\"#\" class=\"close close-more\">Close</a>\n                        <h1 class=\"title\">Watch on All Devices</h1>\n                        <a href=\"#\" class=\"close close-more mobile-close\">Back</a>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"full-device-list col-list\">\n                            <ul class=\"col\">\n                                <li>\n                                    <span class=\"device\">Computer</span>\n                                    <span class=\"details\">Mac OS X and Windows</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Apple TV</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Apple iPhone 4S or higher</span>\n                                    <span class=\"details\">With iOS 7.0 or higher</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Apple iPod Touch 4 or higher</span>\n                                    <span class=\"details\">With iOS 7.0 or higher</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Apple iPad 2 or higher</span>\n                                    <span class=\"details\">With iOS 7.0 or higher</span>\n                                </li>\n                            </ul>\n                            <ul class=\"col\">\n                                <li>\n                                    <span class=\"device\">Apple iPad mini</span>\n                                    <span class=\"details\">With iOS 6.0 or higher</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Roku Streaming Player</span>\n                                    <span class=\"details\">Roku 1, Roku 2, Roku 3, Roku LT</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Roku Streaming Stick</span>\n                                </li>\n                                <li>\n                                    <span class=\"device\">Roku TV</span>\n                                </li>\n                            </ul>\n                        </div>\n                        <ul class=\"styled\">\n                            <li><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customerService)),stack1 == null || stack1 === false ? stack1 : stack1.helpCenter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">Go to the <strong>Help Center</strong> to learn more about device support</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-panel\" id=\"panel-start-trial\">\n            <div class=\"container\">\n\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.isDesktopOrSupported), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <div id=\"more-coming-soon\">\n                    <h2>More Devices Coming Soon</h2>\n                    <form id=\"devices-email\" method=\"post\" action=\"http://www.elabs12.com/functions/mailing_list.html\">\n                        <p>Stay updated on the latest news and devices availability:</p>\n                        <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Enter your email address\" /> <button type=\"submit\">Submit</button>\n\n                        <!-- signup inputs -->\n                        <input type=\"hidden\" name=\"mlid\" value=\"21850\">\n                        <input type=\"hidden\" name=\"siteid\" value=\"2012000788\">\n                        <input type=\"hidden\" name=\"tagtype\" value=\"q2\">\n                        <input type=\"hidden\" name=\"demographics\" value=\"-1\">\n                        <input type=\"hidden\" name=\"uredirection\" value=\"\">\n                        <input type=\"hidden\" name=\"welcome\" value=\"on\">\n                        <input type=\"hidden\" name=\"double_optin\" value=\"\">\n                        <input type=\"hidden\" name=\"append\" value=\"\">\n                        <input type=\"hidden\" name=\"update\" value=\"\">\n                        <input type=\"hidden\" name=\"activity\" value=\"submit\">\n\n                        <!-- redirect URL -->\n                        <input type=\"hidden\" name=\"redirection\" value=\"http://"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.host)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/#/email-signup-complete\">\n                    </form>\n                    <div id=\"device-email-error\" class=\"error\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content-panel\" id=\"front-door-footer\">\n            <div class=\"container\">\n                <div class=\"footer-module\" id=\"questions\">\n                    <h1>Still have questions?</h1>\n                    <ul class=\"styled\">\n                        <li><a target=\"_blank\" href=\"https://cbsi.secure.force.com/CBSi/articles/FAQ/What-is-the-difference-between-the-SHOWTIME-streaming-service-and-SHOWTIME-ANYTIME?popup=false&template=ottShoTemplate\">What’s the difference between this and SHOWTIME ANYTIME?</a></li>\n                        <li><a target=\"_blank\" href=\"https://cbsi.secure.force.com/CBSi/articles/FAQ/What-devices-can-I-use-to-watch?popup=false&template=ottShoTemplate&categories=CBS_Interactive%3AshoGettingStarted\">What devices can I use?</a></li>\n                        <li><a target=\"_blank\" href=\"https://cbsi.secure.force.com/CBSi/articles/FAQ/How-does-the-30-day-free-trial-work?popup=false&template=ottShoTemplate&categories=CBS_Interactive%3AshoGettingStarted\">How does the free trial work?</a></li>\n                        <li><a target=\"_blank\" href=\"https://cbsi.secure.force.com/CBSi/articles/FAQ/Do-I-need-a-traditional-TV-subscription-to-get-it?popup=false&template=ottShoTemplate&referer=sho.com%2Fott&categories=CBS_Interactive%3AShowtimeProducts\">Do I need a TV subscription to do this?</a></li>\n                        <li><a target=\"_blank\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.customerService)),stack1 == null || stack1 === false ? stack1 : stack1.helpCenter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Visit the <strong>Help Center</strong> for more answers</a></li>\n                    </ul>\n                </div>\n                <div class=\"footer-module\" id=\"learn-more\">\n                    <h1>Learn more about Showtime</h1>\n                    <ul class=\"styled\">\n                        <li><a href=\"http://www.sho.com\">Visit SHO.com</a></li>\n                    </ul>\n                </div>\n                <div class=\"footer-module\" id=\"stay-connected\">\n                    <h1>Stay Connected</h1>\n                    <ul class=\"social-links\">\n                        <li><a href=\"https://www.facebook.com/showtime\" target=\"_blank\"><img src=\"/img/ott-paywall/welcome/social-fb.png\" /></a></li>\n                        <li><a href=\"https://twitter.com/SHO_Network\" target=\"_blank\"><img src=\"/img/ott-paywall/welcome/social-twitter.png\" /></a></li>\n                        <li><a href=\"https://instagram.com/showtime/\" target=\"_blank\"><img src=\"/img/ott-paywall/welcome/social-instagram.png\" /></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/registration/account-registration-billing-form-item-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" id=\"prepop\" style=\"position: absolute; top: 25px; right: 25px;\">PREPOP</a>\n\n<div class=\"cta-container\">\n    <span class=\"dash\"></span>\n    <div class=\"cta-copy\">\n        <h1 class=\"headline\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.headline)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        <p class=\"body\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.paywall)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    </div>\n</div>\n\n<div class=\"reg-billing-form\">\n\n</div><!-- .reg-billing-form -->\n\n<div class=\"input\">\n    <label for=\"paymentMethodCard\">Card</label>\n    <input type=\"radio\" name=\"type\" id=\"paymentMethodCard\" value=\"card\" checked>\n    <label for=\"paymentMethodPaypal\">Paypal</label>\n    <input type=\"radio\" name=\"type\" id=\"paymentMethodPaypal\" value=\"paypal\">\n</div>\n<form id=\"payment-method-card\" class=\"payment-method\">\n    <div class=\"input\">\n        <label for=\"firstName\">First Name:</label>\n        <input type=\"text\" name=\"firstName\" data-recurly=\"first_name\" value=\"\" id=\"firstName\">\n    </div>\n    <div class=\"input\">\n        <label for=\"lastName\">Last Name:</label>\n        <input type=\"text\" name=\"lastName\" data-recurly=\"last_name\" value=\"\" id=\"lastName\">\n    </div>\n    <div class=\"input\">\n        <label for=\"address\">Address:</label>\n        <input type=\"text\" name=\"address\" data-recurly=\"address1\" value=\"\" id=\"address\">\n    </div>\n    <div class=\"input quarter-width\">\n        <label for=\"city\">City:</label>\n        <input type=\"text\" name=\"city\" data-recurly=\"city\" value=\"\" id=\"city\">\n    </div>\n    <div class=\"input quarter-width\">\n        <label for=\"state\">State:</label>\n        <input type=\"text\" name=\"state\" data-recurly=\"state\" value=\"\" id=\"state\">\n    </div>\n    <div class=\"input quarter-width\">\n        <label for=\"zipcode\">Zip Code:</label>\n        <input type=\"text\" name=\"zipcode\" data-recurly=\"postal_code\" value=\"\" id=\"zipcode\">\n    </div>\n    <div class=\"input\">\n        <label for=\"cardNumber\">Card Number:</label>\n        <input type=\"textField\" id=\"number\" data-recurly=\"number\">\n    </div>\n    <div class=\"input quarter-width\">\n        <label for=\"securityCode\">Security Code:</label>\n        <input type=\"textField\" id=\"cvv\" data-recurly=\"cvv\">\n    </div>\n    <div class=\"input quarter-width\">\n        <label>Expiration Date: (MM/YY)</label>\n        <input type=\"textField\" id=\"month\" data-recurly=\"month\">\n        <input type=\"textField\" id=\"year\" data-recurly=\"year\">\n    </div>\n    <div class=\"input full-width\">\n        <input type=\"hidden\" name=\"_terms\"><input type=\"checkbox\" name=\"terms\" id=\"terms\">\n        <label for=\"terms\">I am over 18, and I agree to the above conditions and Terms of Use and Privacy Policy</label>\n    </div>\n    <div id=\"couponprompt\" class=\"full-width\">\n    </div>\n    <div id=\"coupondetail\" style=\"display: none;\" class=\"input\">\n        <label>Coupon: </label>\n        <input type=\"text\" name=\"coupon\" value=\"\" id=\"coupon\">\n    </div>\n    <div id=\"plans\" class=\"input full-width\">\n        <input type=\"hidden\" name=\"subscriptionType\" value=\"\" id=\"subscriptionType\">\n    </div>\n    <input type=\"hidden\" name=\"recurlyToken\" data-recurly=\"token\">\n    <input type=\"hidden\" name=\"country\" data-recurly=\"country\" value=\"USA\" id=\"country\">\n    <div class=\"input full-width\">\n        <input type=\"submit\" class=\"primary\" value=\"Start Subscription\">\n    </div>\n</form>\n<form id=\"payment-method-paypal\" class=\"payment-method\">\n    <p>\n        Enter your zip code below and then click on the “Continue to PayPal” button to log on to PayPal using your email and password.\n    </p>\n    <div class=\"input quarter-width\">\n        <label for=\"zipcode\">Zip Code:</label>\n        <input type=\"text\" name=\"zipcode\" data-recurly=\"postal_code\" value=\"\" id=\"zipcode\">\n    </div>\n    <p>\n        By clicking “Continue to PayPal”, you authorize us to continue your month-to-month Showtime subscription (currently $9.99) automatically, charged monthly to the payment method provided, until you cancel. To cancel, go to “Your Account” and click on “Cancel Subscription.” No refunds or credits for partial months.\n    </p>\n    <div class=\"input full-width\">\n        <input type=\"submit\" class=\"primary\" value=\"Continue to PayPal\">\n    </div>\n</form>\n\n\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/change-password-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n    <span class=\"red\" id=\"form-error\"></span>\n    <p class=\"form-item-message\">Create a new password:</p>\n    <div class=\"form-item-group\">\n        <label>Current password:</label>\n        <input type=\"password\" id=\"oldPassword\" name=\"oldPassword\" />\n    </div>\n    <div class=\"form-item-group\">\n        <label>New password:</label>\n        <input type=\"password\" id=\"newPassword\" name=\"newPassword\" />\n    </div>\n    <div class=\"form-item-group\">\n        <label>Confirm password:</label>\n        <input type=\"password\" id=\"newPasswordConfirmation\" name=\"newPasswordConfirmation\" />\n    </div>\n    <div class=\"form-item-group buttons\">\n        <input type=\"submit\" value=\"Update Password\" class=\"button primary\" />\n        <span id=\"form-success\"></span>\n    </div>\n</form>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/edit-email-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form>\n    <div class=\"panel-content-section\">\n        <span class=\"red error\" id=\"form-error\"></span>\n        <p class=\"form-item-message\">Edit your email address:</p>\n        <div class=\"form-item-group\">\n            <label>Email Address:</label>\n            <input type=\"text\" id=\"email\" name=\"email\" value=\"";
  if (helper = helpers.emailAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n        </div>\n\n        <p class=\"form-item-message\">For security, please confirm your password:</p>\n        <div class=\"form-item-group\">\n            <label>Password:</label>\n            <input type=\"password\" id=\"currentPassword\" name=\"currentPassword\"/>\n        </div>\n\n        <div class=\"form-item-group buttons\">\n            <input type=\"submit\" value=\"Update Email Address\" class=\"button primary\" />\n            <span id=\"form-success\"></span>\n        </div>\n    </div>\n</form>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/edit-profile-modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<form>\n    <span class=\"red error\" id=\"form-error\"></span>\n    <p class=\"form-item-message\">Please edit your personal info:</p>\n\n    <div class=\"form-item-group\">\n        <label for=\"firstName\">First Name:</label>\n        <input type=\"text\" name=\"firstName\" maxlength=\"50\" value=\"";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n\n    <div class=\"form-item-group\">\n        <label for=\"lastName\">Last Name:</label>\n        <input type=\"text\" name=\"lastName\" maxlength=\"50\" value=\"";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n\n    <div class=\"form-item-group\">\n        <label for=\"zipcode\">Zipcode:</label>\n        <input type=\"text\" name=\"zipcode\" maxlength=\"5\" value=\"";
  if (helper = helpers.zipcode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.zipcode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n\n    <div class=\"form-item-group\">\n        <label for=\"gender\">Gender:</label>\n        <select name=\"gender\" id=\"gender\">\n            <option value=\"NOT SPECIFIED\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.gender), "===", "NOT SPECIFIED", options) : helperMissing.call(depth0, "is", (depth0 && depth0.gender), "===", "NOT SPECIFIED", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Not Specified</option>\n            <option value=\"MALE\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.gender), "===", "MALE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.gender), "===", "MALE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Male</option>\n            <option value=\"FEMALE\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.gender), "===", "FEMALE", options) : helperMissing.call(depth0, "is", (depth0 && depth0.gender), "===", "FEMALE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Female</option>\n        </select>\n    </div>\n\n    <p class=\"form-item-message\">For security, please confirm your password:</p>\n    <div class=\"form-item-group\">\n        <label>Password:</label>\n        <input type=\"password\" id=\"currentPassword\" name=\"currentPassword\"/>\n    </div>\n\n    <div class=\"form-item-group buttons\">\n        <input type=\"submit\" value=\"Update Personal Info\" class=\"button primary\" />\n    </div>\n</form>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/email-password"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel-header\">\n    <div class=\"panel-title\">\n        <h1>Email & Password</h1>\n    </div>\n</div>\n<div class=\"content-section\">\n    <ul>\n        <li class=\"list-item-group\">\n            <label>Email:</label>\n            <span>";
  if (helper = helpers.emailAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emailAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            <a href=\"#\" class=\"button\" id=\"edit-email\">Edit email</a>\n        </li>\n        <li class=\"list-item-group\">\n            <label>Password:</label>\n            <span>********</span>\n            <a href=\"#\" class=\"button\" id=\"change-password\">Edit Password</a>\n        </li>\n    </ul>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/manage-devices"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"content-section\">\n        <p class=\"red\">\n            You have exceeded your limit of 5 devices per household. To enable video playback on this device remove another device below.\n        </p>\n    </div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <td>\n                        ";
  if (helper = helpers.deviceName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.deviceName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                    </td>\n                    <td>\n                        <time>"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.lastActive), "h:mma", options) : helperMissing.call(depth0, "moment", (depth0 && depth0.lastActive), "h:mma", options)))
    + "</time>\n                        <time class=\"date\">"
    + escapeExpression((helper = helpers.moment || (depth0 && depth0.moment),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.lastActive), "MM.DD.YYYY", options) : helperMissing.call(depth0, "moment", (depth0 && depth0.lastActive), "MM.DD.YYYY", options)))
    + "</time>\n                    </td>\n                    <td>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.currentDevice), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                </tr>\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n                            <span class=\"current-device\">Current Device</span>\n                        ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canDelete), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n                                <a href=\"#\" class=\"remove\"><span class=\"small-x\">&times;</span> Remove</a>\n                            ";
  }

  buffer += "<div class=\"panel-header\">\n    <h1>Manage Your Devices</h1>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.deviceCapMet), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<div class=\"content-section\">\n    <table id=\"device-table\">\n        <thead>\n            <th>Device</th>\n            <th>Last Active</th>\n            <th></th>\n        </thead>\n        <tbody id=\"device-list\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.devices), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/newsletters-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "<span class=\"remove\"><span class=\"small-x\">&times;</span> Unsubscribe</span>";
  }

function program3(depth0,data) {
  
  
  return "Subscribe";
  }

  buffer += "<td>\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</td>\n<td>\n    <a href=\"#\" class=\"toggle-subscribe\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n</td>\n\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/newsletters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel-header\">\n    <h1>Email Preferences</h1>\n</div>\n\n<div class=\"content-section\">\n    <p>Manage your email preferences below. To manage other email preferences, go to <a href=\"http://www.sho.com\">SHO.COM</a>. You will always continue to get service emails from Showtime.</p>\n</div>\n\n<table class=\"newsletters\">\n    <thead>\n    <th>Emails</th>\n    <th><a href=\"#\" id=\"unsubscribe-all\">UNSUBSCRIBE ALL</a></th>\n    </thead>\n    <tbody id=\"newsletters-list\">\n    </tbody>\n</table>\n\n\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/parental-controls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel-header\">\n    <h1>Viewing Restrictions</h1>\n</div>\n\n<div class=\"content-section\">\n    <p>Set maximum ratings allowed for your account.</p>\n</div>\n\n<div class=\"content-section\">\n    <form>\n        <fieldset>\n            <div class=\"form-item-group\">\n                <label for=\"AccountSettingsMovies\">Movies:</label>\n                <select id=\"AccountSettingsMovies\" name=\"primary_movie\">\n                    "
    + escapeExpression((helper = helpers.optionList || (depth0 && depth0.optionList),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.dictionary)),stack1 == null || stack1 === false ? stack1 : stack1.showtimeMovieRatings), ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.movie), options) : helperMissing.call(depth0, "optionList", ((stack1 = (depth0 && depth0.dictionary)),stack1 == null || stack1 === false ? stack1 : stack1.showtimeMovieRatings), ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.movie), options)))
    + "\n                </select>\n            </div>\n\n            <div class=\"form-item-group\">\n                <label for=\"AccountSettingsTv\">TV:</label>\n                <select id=\"AccountSettingsTv\" name=\"primary_tv\">\n                    "
    + escapeExpression((helper = helpers.optionList || (depth0 && depth0.optionList),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.dictionary)),stack1 == null || stack1 === false ? stack1 : stack1.showtimeTVRatings), ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.tv), options) : helperMissing.call(depth0, "optionList", ((stack1 = (depth0 && depth0.dictionary)),stack1 == null || stack1 === false ? stack1 : stack1.showtimeTVRatings), ((stack1 = (depth0 && depth0.pc)),stack1 == null || stack1 === false ? stack1 : stack1.tv), options)))
    + "\n                </select>\n            </div>\n        </fieldset>\n    </form>\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/personal-info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel-header\">\n    <div class=\"panel-title\">\n        <h1>Personal Info</h1>\n    </div>\n    <div class=\"panel-header-actions\">\n        <a class=\"edit-info\">Edit Info</a>\n    </div>\n</div>\n\n<div class=\"content-section\">\n\n    <div class=\"list-item-group\">\n        <label>First Name:</label>\n        <span>";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n    <div class=\"list-item-group\">\n        <label>Last Name:</label>\n        <span>";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n    <div class=\"list-item-group\">\n        <label>Zip code:</label>\n        <span>";
  if (helper = helpers.zipcode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.zipcode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n    <div class=\"list-item-group\">\n        <label>Gender:</label>\n        <span>";
  if (helper = helpers.gender) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gender); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n</div>\n";
  return buffer;
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/settings-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel-header\">\n    <h1>Settings</h1>\n</div>\n\n<aside>\n    <nav id=\"settings-menu\">\n    </nav>\n</aside>\n\n<main id=\"settings-content\">\n</main>\n";
  });
this["ShoanyApp"] = this["ShoanyApp"] || {};
this["ShoanyApp"]["Templates"] = this["ShoanyApp"]["Templates"] || {};
this["ShoanyApp"]["Templates"]["user/settings/settings-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<li><a href=\"/#/account\">Email &amp; Password</a></li>\n<li><a href=\"/#/account/personal-info\">Personal Info</a></li>\n<li><a href=\"/#/account/subscription\">Subscription</a></li>\n<li><a href=\"/#/account/viewing-restrictions\">Viewing Restrictions</a></li>\n<li><a href=\"/#/account/email-newsletters\">Email Preferences</a></li>\n<li><a href=\"/#/my-devices\">Manage Devices</a></li>\n";
  });