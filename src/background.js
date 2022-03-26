async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};
  
chrome.tabs.onActivated.addListener(() => {
    const currentTab = await getCurrentTab();
    console.log(`tab changed to ${currentTab}`);
});