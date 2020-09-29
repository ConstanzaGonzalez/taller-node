const UsersDAO = require('../daos/userDAO');

class UsersService{
    static getUsers(){
        let users = UsersDAO.getUsers();
        return users;
    }
    static getUsersById(id){
        let user = UsersDAO.getUsersById(id);
        return user;
    }
}

module.exports = UsersService;