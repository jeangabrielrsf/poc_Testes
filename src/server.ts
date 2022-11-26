import express from "express";

const server = express();
server.use(express.json());

server.listen(4000, () => {
	console.log("Running server on port 4000...");
});
