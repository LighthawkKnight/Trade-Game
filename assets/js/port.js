
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
var selectedPort;
var selectedGoods;
var totalCost;
var qty;


$(document).ready(function () {
    //  $.fn.modal.Constructor.prototype.enforceFocus = function () {};
    // $('#myModal').modal();
    // alert("I am here");


    $("#trade-buy").on("click", function () {
        var price = [];
        selectedPort = $('#portPlace').text();
        selectedGoods = $('#goodsOption :selected').val();
        qty = $("#quantity").val();
        //  alert(selectedPort);  
        if (selectedGoods == "" || qty == "") {
            // $("#error").html("Please select all the fields");
            // $('#myModal').modal("hide");
            // $('#errorModal').modal("show");

            // alert("Please select all the fields");
            // return false;
            bootbox.alert("Please enter data in all the fields.");
            return false;
        } else if (isNaN(qty)) {
            bootbox.alert("Only numbers are allowed in Quantity.");
            // alert("Please enter a number in Qty");
            return false;
        }
        // price = selectedPort.price[selectedGoods];
        price = getCurrentPrice(selectedPort, selectedGoods);
        totalCost = parseInt(price) * parseInt(qty);
        $("#totalCost").text(totalCost);
        $('#confirm-buy').show();
        $('#cancel-buy').show();
    });

    $("#trade-sell").on("click", function () {
        var price = [];
        var selectedPort = $('#portPlace').text();
        selectedGoods = $('#goodsOption :selected').val();
        qty = $("#quantity").val();
        //  alert(selectedPort);  
        if (selectedGoods == "" || qty == "") {
            // $("#error").html("Please select all the fields");
            // $('#myModal').modal("hide");
            // $('#errorModal').modal("show");

            // alert("Please select all the fields");
            // return false;
            bootbox.alert("Please enter data in all the fields.");
            return false;
        } else if (isNaN(qty)) {
            bootbox.alert("Only numbers are allowed in Quantity.");
            // alert("Please enter a number in Qty");
            return false;
        }
        price = selectedPort.price[selectedGoods];
        totalCost = parseInt(price) * parseInt(qty);
        $("#totalCost").text(totalCost);
        $('#confirm-sell').show();
        $('#cancel-sell').show();
    });

    $("#close").on("click", function () {
        // $('#portOption option')[0].selected = true;
        $('#goodsOption option')[0].selected = true;
      //  $('#portOption :selected').val('');
      //  $('#goodsOption :selected').val("");
        $("#quantity").val("");
        $("#totalCost").text("");
    });

    $('#confirm-buy').on("click", function(){
        buy(selectedGoods, qty, totalCost);
        $("#quantity").val("");
        $("#totalCost").text("");
        $('#confirm-buy').hide();
        $('#cancel-buy').hide();
    });

    $('#confirm-sell').on("click", function(){
        sell(selectedGoods, qty, totalCost);
        $("#quantity").val("");
        $("#totalCost").text("");
        $('#confirm-sell').hide();
        $('#cancel-sell').hide();
    });

    $('#cancel-buy').on("click", function(){
        $("#quantity").val("");
        $("#totalCost").text("");
        $('#confirm-buy').hide();
        $('#cancel-buy').hide();
    });

    $('#cancel-sell').on("click", function(){
        $("#quantity").val("");
        $("#totalCost").text("");
        $('#confirm-sell').hide();
        $('#cancel-sell').hide();
    });

    // this will call the api functions based on the day
    // armPrice(nth-day), oliveOilPrice(), fishPrice(), cheesePrice()
    function getCurrentPrice(port, goods) {
        var array = JSON.parse(localStorage.getItem(port));
        switch (goods) {
            case "Cheese":
                return array[0];
            case "Olive_Oil":
                return array[1];
            case "Fish":
                return array[2];
            case "Arms":
                return array[3];
            default:
                console.log("getCurrentPrice error");
        }
    }

});
