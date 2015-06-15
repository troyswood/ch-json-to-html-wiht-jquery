

var data = {
    1709: "Geertruidenberg", 
    1710: "Netersel", 
    1711: "Macharen", 
    1712: "Beers", 
    1713: "Hank", 
    1714: "Oudemolen", 
    1715: "Nistelrode"
};

var values = [];
$.each(data, function(index, value) {
    values[index] = value;
});

values.sort();

$.each(values, function(index, value) {
    if(value != undefined) {
        // $("#Profile_cityId").append("<option>"+ value +"</option");
        self.append(values[]);
    }
});

