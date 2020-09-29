class UserDAOS{
    static getUsers(){
        return [{id: 1, nombre: 'ivan', edad: '24'},
        {id: 2, nombre: 'coty', edad: '24'},
        {id: 3, nombre: 'juan', edad: '22'},
        {id: 4, nombre: 'mati', edad: '23'}]
    }

    static getUsersById(id){
        return [{id: 1, nombre: 'ivan', edad: '24'},
        {id: 2, nombre: 'coty', edad: '24'},
        {id: 3, nombre: 'juan', edad: '22'},
        {id: 4, nombre: 'mati', edad: '23'}].find(user => user.id == id);
    }
}

module.exports = UserDAOS;