export default class SiyuanToolkitPlugin {
  onload() {
    // 插件加载时的初始化逻辑
    console.log("Siyuan Toolkit Plugin loaded");
    // 此处可注册自定义命令、面板等
  }

  onunload() {
    // 插件卸载时的清理逻辑
    console.log("Siyuan Toolkit Plugin unloaded");
  }
}
