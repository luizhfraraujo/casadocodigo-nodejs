let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("F1040EZ.json", JSON.stringify(pdfParser.getAllFieldsTypes()));    
});

pdfParser.loadPDF("bjcp-2015-beer-pt-br.pdf");
