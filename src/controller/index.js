import APPRequest from '../controller/request';

export const AppController = {
	index(req, res, next) {
		return res.render('index', { title: 'Captain Hamilton' });
	},
	async contact(req, res, next) {
		const { data: { location, contact_info } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
		if (location || contact_info) {
			res.render('contact', { title: 'Captain Hamilton', location, contact_info });
		} else {
			res.render('contact', { title: 'Captain Hamilton' });
		}
	},
	about(req, res, next) {
		return res.render('about', { title: 'Captain Hamilton' });
	},
	terms(req, res, next) {
		return res.render('terms', { title: 'Captain Hamilton' });
	},
	async entry(req, res, next) {
		const { data: { social_auth_keys } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
		res.render('trips', {
			title: 'Captain Hamilton',
			host: process.env.HOST,
			social_auth_keys
		});
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
