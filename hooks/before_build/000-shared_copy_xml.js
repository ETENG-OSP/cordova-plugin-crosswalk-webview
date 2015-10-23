module.exports = function(context) {

  /** @external */
  var fs = context.requireCordovaModule('fs'),
      path = context.requireCordovaModule('path'),
      ConfigParser = context.requireCordovaModule("cordova-lib/src/configparser/ConfigParser"),
      XmlHelpers = context.requireCordovaModule("cordova-lib/src/util/xml-helpers"),
      et = context.requireCordovaModule('elementtree');
       
  /** @defaults */   
  var pluginCopyFile = path.join(context.opts.plugin.dir, 'res','xwalk_app_strings.xml'), 
      androidPlatformDir = path.join(context.opts.projectRoot,
            'platforms', 'android'),
      copyTarget = androidPlatformDir+'/res/values-zh-rCN/strings.xml';
      
  /** Init */
  var projectResXml = XmlHelpers.parseElementtreeSync(pluginCopyFile);
  fs.writeFileSync(copyTarget, projectResXml.write({indent: 4}), 'utf-8');
};
