const user = require('../Modules/profiles')

const getUserData = async (req , res) => { 
	try{
		const userId = req.params.userId;
		console.log('getrequest ')
		console.log('userId : ' , userId);
    const  existingUser = await user.findById(userId)
		
    if(!existingUser) {
			res.status(404).json({message : 'user not found'})
    }

		console.log("existing user " , existingUser);
		res.status(201).json({data : existingUser})
	} catch (error){
		console.log('error : ' , error);
	}   
}
const updateData = async (req , res) => {


	console.log('req.body' , req.body);
	try{
		const userId = req.body.userId;
		const instituteName = req.body.instituteName
		const specification = req.body.specification
		const yoj = req.body.yoj
		const yoe = req.body.yoe
		const grade = req.body.grade
		const activity = req.body.activity
		const state = req.body.state
		const district = req.body.district
		const skill = req.body.skill
		const language = req.body.language
		const about = req.body.about
		console.log('updateData ')
    const  existingUser = await user.findById(userId)
    
		if (!existingUser) {
			return res.status(404).json({ error: 'User not found' });
	}
    
		existingUser.instituteName = instituteName
		existingUser.specification =specification
		existingUser.yoj = yoj;
		existingUser.yoe = yoe;
		existingUser.grade = grade;
		existingUser.activity = activity;
		existingUser.state = state;
		existingUser.district = district;
    existingUser.skills = skill;
		existingUser.language = language
		existingUser.about = about;
		
		await existingUser.save();

		console.log('User updated:', existingUser);
		res.status(200).json({ message: 'User updated successfully', user: existingUser });
    
	} catch (error){
		console.log('error : ' , error);
		res.status(500).json({ error: 'Internal server error' });
	} 
}

module.exports = {
	getUserData,
	updateData
}