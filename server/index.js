import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import compression from "compression";
import NodeCache from "node-cache";
// Components
import App from "../src/containers/App/index.js";
// Context
import { GlobalProvider } from "../src/contexts/Global.provider";
// Services
import { getLaunchesList } from "../src/services/launchService";
// renderer
import renderer from "./renderer";
// helper methods
import { jsonToQuery } from "../src/utils/helpers";

const PORT = process.env.PORT || 3001;
const server = express();
const cache = new NodeCache();

server.use(compression());

server.get("/", async (req, res) => {
	const { query } = req;
	const serializedQuery = jsonToQuery(query) || "default";
	if (cache.has(serializedQuery)) {
		return res.status(200).send(cache.get(serializedQuery));
	}
	else {
		const { data, error } = await getLaunchesList(query);
		if (error) {
			return res.status(500).send(error);
		}
		else {
			const app = ReactDOMServer.renderToString(
				<GlobalProvider initialData={data}>
					<App filters={query} />
				</GlobalProvider>
			);

			const { html, err } = await renderer(app, data, query);
			if (err) {
				return res.status(500).send(err);
			}
			cache.set(serializedQuery, html);
			return res.status(200).send(html);
		}
	}
});

server.use(express.static("./build"));

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});