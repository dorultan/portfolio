import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {createStore} from 'redux';

import rootReducer from '../app/reducers';
import routes from '../app/routes';

import {Provider} from 'react-redux';
import {StaticRouter, Route} from 'react-router-dom';
import {matchPath} from 'react-router-dom';

import App from '../app/components/app';

const renderHtml = (html, content, INIT_DATA) => {

	return `
	 <!DOCTYPE html>
	 <html>
		<head>
			<title>${content}</title>
			<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
			<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  			<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/atom-one-dark.min.css">
			<link type="text/css" rel="stylesheet" href="/main.css"/>
		</head>
		<body>
		<div id="root">${html}</div>
		<script src="/bundle.js"></script>
		<script>const INIT_DATA = ${JSON.stringify(INIT_DATA)};</script>
		</body>
	 </html>
	`
};

const serverRenderer = () => {
	return (req, res, next) => {
		const ActiveRoute = routes.find((route) => matchPath(req.url, route));
		const store = createStore(rootReducer, {});
		const _activeRoute = routes.find(route => {
			return matchPath(req.url, route);
		});
		const pathName = ActiveRoute.path.replace('/', '');
		const content = `Dorultan Ianos - ${pathName === '' ? 'home' : pathName}`;
		const INIT_DATA = {name: "dorultan Ianos"};
		const html = ReactDOMServer.renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={content}>
					<App>
						{ActiveRoute.component}
					</App>
				</StaticRouter>
			</Provider>
		);

		res.status(200).send(renderHtml(html, content, INIT_DATA));
	}
}

export default serverRenderer;