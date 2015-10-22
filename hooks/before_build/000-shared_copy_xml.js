module.exports = function(context) {

  /** @external */
      var fs = context.requireCordovaModule('fs'),
          path = context.requireCordovaModule('path'),
          ConfigParser = context.requireCordovaModule("cordova-lib/src/configparser/ConfigParser"),
          XmlHelpers = context.requireCordovaModule("cordova-lib/src/util/xml-helpers"),
          et = context.requireCordovaModule('elementtree');
          
  var androidPlatformDir = path.join(context.opts.projectRoot,
            'platforms', 'android');
        
    
