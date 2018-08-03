function forLoop()
{
    for (var i=1;i<=50;i++)
    {
        if(i%5==0)
        {
        document.getElementById("for").innerHTML="Using for Loop" ;
        var para = document.createElement("P");                   // Create a <p> element
        var t = document.createTextNode(i);                        // Create a text node
        para.appendChild(t);                                       // Append the text to <p>
        document.body.insertBefore(para,document.getElementById("while")); /* The insertBefore() method 
        inserts a node as a child,right before specified existing child ,in this case before <span> with
         id "while",*/ 
        }
        
    }
}
/*To create a <p> with text, Text Node is created which is appended to the <p> element.Then this <p> element 
is appended to the <body> before of after the specified element.*/
function whileLoop()
{
    var i=1;
    while(i<=50)
    {
        if(i%5==0)
        {
        document.getElementById("while").innerHTML="Using while Loop" ;
        var para = document.createElement("P");                   // Create a <p> element
        var t = document.createTextNode(i);                        // Create a text node
        para.appendChild(t);                                       // Append the text to <p>
        document.body.appendChild(para);                           // Append <p> to <body> 
        }
        i++
    }
}