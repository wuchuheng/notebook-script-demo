var http = require("http");
const pidMapNode = {};
const nodes = [
  { pid: 0, id: 1, content: "0-1" },
  { pid: 1, id: 2, content: "0-1-2" },
  { pid: 2, id: 3, content: "0-1-2-3" },
  { pid: 0, id: 4, content: "0-4" },
  { pid: 4, id: 5, content: "0-4-5" }
];
const tree = [];
nodes.forEach((item) => {
  pidMapNode[item.id] = item;
  if (item.pid === 0) {
    tree.push(pidMapNode[item.id]);
  } else {
    pidMapNode[item.pid]["children"] = pidMapNode[item.id];
  }
});

console.info(tree);
//create a server object:
http
  .createServer(function (req, res) {
    res.write("hello wuchuheng"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
