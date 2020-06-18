
  document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', collectData)
      })
    }
  
    function collectData (res) {

        let filename = 'monzo_statement_' + new Date().toLocaleDateString() + '.csv';
        let link = document.createElement('a');
        link.style.display = 'none';
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'data:Application/octet-stream,' + encodeURIComponent(res.data));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

  }, false)
