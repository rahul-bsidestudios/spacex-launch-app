import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import compression from "compression";
// Components
import App from "../src/containers/App/index.js";
// Services
import { getLaunchesList } from "../src/services/launchService";
// renderer
import renderer from "./renderer";

const PORT = process.env.PORT || 3001;
const server = express();

server.use(compression());

server.get("/", async (req, res) => {
	const { query } = req;
	const { data, error } = await getLaunchesList(query);
	if (error) {
		return res.status(500).send(error);
	}
	else {
		const app = ReactDOMServer.renderToNodeStream(<App initialState={data} filters={query} />);
		const { html, err } = await renderer(app, data, query);
		if (err) {
			return res.status(500).send(err);
		}
		return res.status(200).send(html);
	}
});

server.use(express.static("./build"));

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});