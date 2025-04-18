// 获取i18n字符串
function getMessage(messageName, substitutions) {
  return chrome.i18n.getMessage(messageName, substitutions) || messageName;
}

// 当弹出窗口加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
  // 翻译所有带i18n属性的元素
  document.querySelectorAll('[i18n]').forEach(el => {
    const msg = getMessage(el.getAttribute('i18n'));
    if (msg) {
      if (el.tagName === 'INPUT') {
        el.value = msg;
      } else {
        el.textContent = msg;
      }
    }
  });

  // 获取当前设置的快捷键
  chrome.commands.getAll(function(commands) {
    // 查找我们的命令
    const openTabCommand = commands.find(command => command.name === 'open-tab-in-group');
    
    if (openTabCommand && openTabCommand.shortcut) {
      // 更新显示的快捷键
      const shortcutElement = document.querySelector('.shortcut');
      if (shortcutElement) {
        shortcutElement.textContent = openTabCommand.shortcut;
      }
    }
  });
  
  // 添加版本信息
  const versionElement = document.querySelector('.footer p');
  if (versionElement) {
    try {
      const manifest = chrome.runtime.getManifest();
      versionElement.textContent = getMessage('versionText', [manifest.version]);
    } catch (error) {
      console.error('获取扩展信息失败:', error);
    }
  }
  
  // 添加事件监听器，用于在点击链接时打开新标签页
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href) {
      chrome.tabs.create({ url: e.target.href });
      return false;
    }
    // 处理设置快捷键按钮点击
    if (e.target.id === 'setupShortcut') {
      console.log('尝试打开快捷键设置页面');
      chrome.tabs.create({ url: 'edge://extensions/shortcuts' }, (tab) => {
        if (chrome.runtime.lastError) {
          console.error('打开快捷键页面失败:', chrome.runtime.lastError);
          alert('无法打开设置页面，请手动访问: edge://extensions/shortcuts');
        } else {
          console.log('成功打开快捷键设置页面');
        }
      });
    }
  });
});
