
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


    function table_as_csv() {
        let rows = document.querySelectorAll('tr');
        let csv = [];
        let csvString;
        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll('td, th');
            for (let j = 0; j < cols.length; j++) {
                console.log("J: ", j);
                let data = cols[j].innerText.replace(/(\s\s)/gm, ' ')
                data = data.replace(/"/g, '""');
                row.push('"' + data + '"');
            }
            csv.push(row.join(';'));
        }
        return csv_string = csv.join('\r\n');
    }

    sendResponse({
        data: table_as_csv()
    })
})
