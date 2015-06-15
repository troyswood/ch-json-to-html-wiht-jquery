

 

function addAllColumnHeaders(jsonData) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');


    for (var i = 0; i < jsonData.length; i++) {
        var rowHash = jsonData[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th nowrap/>').html(key));
            }
        }
    }
    $("#jsonTable").append(headerTr$);

    return columnSet;
}

$.getJSON("data.json", function (data) {
    var columns = addAllColumnHeaders(data);
    

    for (var i = 0; i < data.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = data[i][columns[colIndex]];

            if (cellValue === null) { cellValue = ""; }

            row$.append($('<td nowrap/>').html(cellValue));
        }
        $("#jsonTable").append(row$);
    }
});

