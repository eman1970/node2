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

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find()
        response.status(201).send(databaseResponse)
    } catch (error) {
        response.status(500).send({ message: 'Error while trying to find user',
        stack: error})

    }
}

const deleteUser = async (request, response) => {
    const user = request.body.username
    try {
        const databaseResponse = await UserModel.deleteOne({ username: user })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send( { message: 'Error while trying to delete user',
        stack: error})
    }
} 

const updateUser = async (request, response) => {
    const userId = request.params.userId
    const data = {
        username: request.body.username,
        password: request.body.password
    }
    try {
        const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true })
        response.status(200).send({ message:'Successfully updated user by ID', data: databaseResponse})
    } catch (error) {
        response.status(500).send({
            message: `Error while trying to update user with ID ${userId}`,
            error: error.message
        })

    }


}


export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
    
}