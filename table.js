function generateTable() {
    let table=document.getElementById("tableValue").value;
for (let index=1; index <=20; index++)
{document.write ("<h1>" + table + " X " + index + " = " + table * index + "</h1>"
    )
}

}