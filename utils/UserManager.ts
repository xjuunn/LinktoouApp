import User from '../types/User'
export default class UserManager {

    constructor() { }

    static userList: Map<string, User> = new Map();

    public addUser(user: User) {
        UserManager.userList.set(user.id, user);
    }

    public addUserByInfo(id: string, name: string, conn: any) {
        UserManager.userList.set(id, new User(id, name, conn));
    }

    public findUserById(id: string): User|undefined {
        return UserManager.userList.get(id);
    }

    public getUserList(): Map<string, User>{
        return UserManager.userList;
    }



}