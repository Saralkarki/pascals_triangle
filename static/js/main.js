function text_show() {
    document.getElementById('output_text').style.display='block';
}
function row() {
    //get the value from the input text
    var input = document.getElementById('number').value;
    var rows = parseInt(input, 10);
        rows = rows + 1;
       
    var coeff = 1 ; 
    var result = ""
    //document.getElementById('result').innerHTML = "The value is" + " " + rows + "<br>";
    //use for loop to print the pascal table
    //var pascalTriangle = "";
    for(var i = 0; i < rows; i++)
    {
        var tri = "";
        for(var spaces = 1; spaces < rows - i; spaces++)
        {
            //document.write("&#160;");
            tri += "&#160;";
        }
        for (var j = 0; j <= i; j++)
        {
            if( j == 0 || i == 0)
            {
                
                //document.write(coeff);
                tri = tri + coeff;
            }
            else
            {
                coeff = coeff * ( i - j + 1)/j ;
                //document.write("  " + coeff);
                tri = tri + "&#160;" +coeff;
            }
            
        }
        //document.write("<br>");
        
        result  = result + '<br>' +  tri;
    }
    //div_result.innerHTML = result;
    document.getElementById("result").innerHTML = result;
    //document.getElementById('result').innerHTML = rows;
    //document.getElementById('result').innerHTML = typeof(result);
    //console.log(variable);
}
    




