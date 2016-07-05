window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker Registered');
    })
  } else {
    console.log('Service Workers Are Not Supported In This Browser');
  }
})
