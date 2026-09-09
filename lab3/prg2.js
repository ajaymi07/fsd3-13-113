import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
   res.write("<h1>Ajay Mishra</h1>");
   res.write("<p>LOream ,ipsum dolor amet dncjd ncdnjnd jdcbjbad jd  c jjcnjndnn bcnn dcbjc j cncdnck kkncndkcnknckd kndc cnhdc   bjbb nkn   jsckjkscjjc </p>")
  res.end( "<h3>bye bye </h3>");
});

server.listen(4444, () => console.log("Server is running at 4444..."));
