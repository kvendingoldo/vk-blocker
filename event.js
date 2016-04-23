chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name == 'noti') {

    }
});
 
chrome.alarms.create('noti', { 
    delayInMinutes: 0.1, 
    periodInMinutes: 1 
});