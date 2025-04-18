// 监听快捷键命令
chrome.commands.onCommand.addListener((command) => {
  if (command === "open-tab-in-group") {
    openNewTabInCurrentGroup();
  }
});

// 在当前标签页群组中打开新标签页
async function openNewTabInCurrentGroup() {
  try {
    // 获取当前活动窗口中的活动标签页
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!activeTab) {
      console.error("无法获取当前活动标签页");
      return;
    }
    
    // 获取当前标签页的群组ID（如果有）
    const groupId = activeTab.groupId;
    
    // 创建新标签页
    const newTab = await chrome.tabs.create({
      active: true,
      index: activeTab.index + 1, // 在当前标签页之后创建
      windowId: activeTab.windowId
    });
    
    // 如果当前标签页在群组中，将新标签页添加到同一群组
    if (groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE) {
      await chrome.tabs.group({
        tabIds: [newTab.id],
        groupId: groupId
      });
      
      console.log(`已在群组 ${groupId} 中创建新标签页`);
    } else {
      console.log("当前标签页不在群组中，已创建独立标签页");
    }
  } catch (error) {
    console.error("创建标签页时出错:", error);
  }
}
