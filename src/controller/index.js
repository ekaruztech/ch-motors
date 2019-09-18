import APPRequest from '../controller/request';

export const AppController = {
	index(req, res, next) {
		return res.render('index', { title: 'Captain Hamilton' });
	},
	async contact(req, res, next) {
		const { data: [api] } = await APPRequest.getApi({api_key: process.env.VOOMSWAY_API_KEY});
		if (api.account) {
			const { location, contact_info } = api.account;
			res.render('contact', { title: 'Captain Hamilton', location, contact_info });
		} else {
			res.render('contact', { title: 'Captain Hamilton' });
		}
	},
	about(req, res, next) {
		return res.render('about', { title: 'Captain Hamilton' });
	},
	entry(req, res, next) {
		res.render('trips', { title: 'Captain Hamilton', host: process.env.HOST });
	},
	async terminals(req, res, next) {
		const page = req.query.page || 1;
		const { _meta, data } = await APPRequest.getTerminals({ page });
		if (data) {
			res.render('terminals', { title: 'Captain Hamilton', terminals: data, pagination: _meta.pagination });
		} else {
			res.render('terminals', { title: 'Captain Hamilton', terminals: [], pagination: null });
		}
	}
};
