import UserModel from '../models/User.model.js'

const createUser = async (request, response) => {

    const user = new UserModel({
        username: request.body.username,
        password: request.body.password
    })

    try {
        const databaseResponse = await user.save()
        response.status(201).send(databaseResponse)
    } catch(error) {
        response.status(500).send({ message: 'Error while trying to create user',
        stack: error })
    }

}

export default {
    createUser
}