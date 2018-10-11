
function port(location, price) {
    this.location = location;
    this.price = price;
}

var lisbonPort = new port("lisbon", {
    cheese: 37,
    olive_oil: 34,
    fish: 25,
    arms: 120
});
var miamiPort = new port("miami", {
    cheese: 52,
    olive_oil: 7,
    fish: 12,
    arms: 145
});
var mumbaiPort = new port("mumbai", {
    cheese: 46,
    olive_oil: 121,
    fish: 24,
    arms: 72
});
var houstonPort = new port("houston", {
    cheese: 31,
    olive_oil: 39,
    fish: 25,
    arms: 102
});
var elizabethPort = new port("elizabeth", {
    cheese: 45,
    olive_oil: 30,
    fish: 8,
    arms: 181
});
// $('#myModal').on('shown.bs.modal', function() {
//     alert("i am in");
//     $(document).off('focusin.modal');
// });

$(document).ready(function () {
   
    $(".trade-btn").on("click", function () {
        var price;
        var totalCost;
        var selectedPort = $('#portOption :selected').val();  
        var selectedGoods = $('#goodsOption :selected').val();    
        var qty = $("#quantity").val();  
      //  alert(selectedPort);  
        if (selectedPort == "" || selectedGoods == "" || qty == "") {
            alert("Please select all the fields");
            return false;
        } else if(isNaN(qty)) {
            alert("Please enter a number in Qty");
            return false;
        }      
        price=window[selectedPort].price[selectedGoods]; 
        totalCost=parseInt(price)*parseInt(qty);          
        $("#totalCost").text(totalCost);   
    });

});
