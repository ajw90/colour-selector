// With the assistance of JQuery, the hexadecimal colour selector's functionality is incorporated into the 
// client-side HTML/CSS interface.

$(document).ready
(
    () =>
    {
    	$(".plus").on
    	(
    		"click",
            (event) =>
            {
                colourSelector.increment($(event.target).attr("data-hex-value"));            
                $("#RGBNumber").text(colourSelector.hexToRGBString());
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
    	);
        $(".minus").on
        (
            "click",
            (event) =>
            {
                colourSelector.decrement($(event.target).attr("data-hex-value"));                
                $("#RGBNumber").text(colourSelector.hexToRGBString());                
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
        );    
        $("#resetButton").on
        (
            "click",
            (event) =>
            {
                colourSelector.black();
                $("#RGBNumber").text(colourSelector.hexToRGBString());
                $("body").css("background-color", colourSelector.hexToRGBString());
            }
        );
        $("#hideButton").on
        (
            "click",
            (event) =>
            {
                $("#menu").css("display", "none");
                $("#showButton").css("display", "block");
            }
        );
        $("#showButton").on
        (
            "click",
            (event) =>
            {
                $("#showButton").css("display", "none");
                $("#menu").css("display", "block");
            }
        );
    }
);