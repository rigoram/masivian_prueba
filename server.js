
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var btree = require('./btree');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (req, res)
{
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Esta es la pagina de inicio.');
    }
    else if (req.url.startsWith('/arbol')) {
        var t = new btree();
        var url_parts = url.parse(req.url, true);
        var arr = url_parts.query['valores'].split(',');
        t.creaArbol(arr);
        res.writeHead(200, { 'Content-Type': 'text/json', 'Access-Control-Allow-Origin': '*', 'X-Powered-By': 'nodejs' });
        let treeString = JSON.stringify(t);
        var xurl = querystring.stringify({ 'tree': treeString });
        res.end(xurl);
    }
    else if (req.url.startsWith('/ancestro')) {
        var url_parts = url.parse(req.url, true);
        var tree = JSON.parse(url_parts.query['tree']);
        var val1 = url_parts.query['val1'];
        var val2 = url_parts.query['val2'];
        var t = new btree();
        t.creaArbolJson(tree);
        var commonAncestor = t.lowestCommonAncestor(t.root, val1, val2).value;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(util.format('El ancestro comun para los valores %s y %s es %s', val1, val2, commonAncestor));
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
}
).listen(port);

