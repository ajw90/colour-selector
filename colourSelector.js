    // This object encapsulates the logic of the hexadecimal colour selector; without making too many 
// assumptions about the interface seen by the end-user.

let colourSelector = 
{
    hexValues: [0, 0, 0, 0, 0, 0],
    black: function ()
    {
        this.hexValues = [0, 0, 0, 0, 0, 0];
    },
    hexToRGBString: function ()
    {
    	let i;
    	let colourString = "#";
        for (i in this.hexValues)
        {
            current = this.hexValues[i];
    
            switch (current)
            {
            	case 10: colourString += "A"; break;
            	case 11: colourString += "B"; break;
            	case 12: colourString += "C"; break;
            	case 13: colourString += "D"; break;
            	case 14: colourString += "E"; break;
            	case 15: colourString += "F"; break;
            	default: colourString += current.toString();
            }
        }       
        return colourString;
    }, 
    increment: function (n)
    {
    	if (n < 0 || n > 5)
    	{
    		return;
    	}
    
        if (this.hexValues[n] === 15)
        {
        	return;
        }
        else
        {
        	this.hexValues[n]++;
        }
    },
    decrement: function (n)
    {
    	if (n < 0 || n > 5)
    	{
    		return;
    	}
    
        if (this.hexValues[n] === 0)
        {
        	return;
        }
        else
        {
        	this.hexValues[n]--;
        }
    }
};