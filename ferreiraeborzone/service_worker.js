chrome.tabs.onCreated.addListener(function (tab){

  if(tab.pendingUrl === 'chrome://newtab/'){
    chrome.tabs.update(tab.id, {url: 'https://sistema.ferreiraeborzone.com.br'})
  }  
});
