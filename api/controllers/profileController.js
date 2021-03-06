import Profile from '../models/profile';

const profileController = {

	get: (req, res) => {
		Profile
		
		.findOne({
			name: 'defaultProfile'
		})
		.populate({
			path: 'skills',
			populate: {
				path: 'icon'
			}
		})

		.populate({
			path: 'education',
			populate: {
				path: 'logo'
			}
		})

		.exec((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			else {
				res.status(200).json(data);
			}
		})
	},

	create: (req, res) => {
		const body = req.body;

		Profile.create({
			introduction: body.introduction,
			skills: [],
			education: []	
		},(err, data) => {

			if(err) {

				return res.status(400).send(err);
			}

			res.status(200).json(data);
		})
	},

	update: (req, res) => {
		const update = req.body.update;
		Profile.findOneAndUpdate({
			name: 'defaultProfile'
		}, update, {new: true, safe: true})

		.exec((err, data) => {

			if(err) {
				return res.status(400).json({message: 'Profile update failed', error: err});
			}

			res.status(200).json(data);
		})
	}
}

export default profileController;