// With the assistance of JQuery, the hexadecimal colour selector's functionality is incorporated into the 
// client-side HTML/CSS interface.

$(document).ready
(
    function ()
    {
    	$(".plus").on
    	(
    		"click",
            function (event)
            {
                colourSelector.increment($(event.target).attr("data-hex-value"));            
                $("#RGBNumber").text(colourSelector.hexToRGBString());
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
    	);
        $(".minus").on
        (
            "click",
            function (event)
            {
                colourSelector.decrement($(event.target).attr("data-hex-value"));                
                $("#RGBNumber").text(colourSelector.hexToRGBString());                
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
        );    
        $("#reset_button").on
        (
            "click",
            function (event)
            {
                colourSelector.black();
                $("#RGBNumber").text(colourSelector.hexToRGBString());
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
        );
        $("#hide_button").on
        (
            "click",
            function (event)
            {
                $("#menu").css("display", "none");
                $("#show_button").css("display", "block");
            }
        );
        $("#show_button").on
        (
            "click",
            function (event)
            {
                $("#show_button").css("display", "none");
                $("#menu").css("display", "block");
            }
        );
    }
);