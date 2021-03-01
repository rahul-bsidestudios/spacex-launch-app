import React from 'react';
import path from 'path';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
// Components
import App from '../src/containers/App/index.js';
// Services
import { getLaunchesList } from '../src/services/launchService';
import renderer from './renderer';

const PORT = process.env.PORT || 3001;
const server = express();

server.get('/', async (req, res) => {
	const { data, error } = await getLaunchesList();
	if (error) {
		return res.status(500).send(error);
	}
	else {
		const app = ReactDOMServer.renderToString(<App initialState={data} />);
		const { html, err } = await renderer(app, data);
		if (err) {
			return res.status(500).send(err);
		}
		return res.status(200).send(html);
	}
});

server.use(express.static('./build'));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});