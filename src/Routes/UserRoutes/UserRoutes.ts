import { Request, Response } from 'express';
import User from '../../Models/UserModel/UserModel';

export default class UserRoutes {

	public userRoutes(app: any): void {

		let newUserData = {
			firstName: `kushal`,
			lastname: `khadka`
		}
		app.route('/api').get((req: Request, res: Response) => {
			let user = new User(newUserData);
			user.save()
				.then((data) => console.log(data))
				.catch((error) => console.log(error));
			res.status(200).send(newUserData);
		});
	}
}