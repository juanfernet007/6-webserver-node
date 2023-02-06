const http = require('http');

http.createServer( (req, resp) => {
    
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    
    //generar un archivo csv con la respuesta
    // resp.setHeader('Content-Disposition', 'attachment; filename= lista.csv');
    // resp.writeHead(200, { 'Content-Type': 'application/csv' });

    resp.write('Hola mundo');    
    resp.end();

}).listen( 8080 );
