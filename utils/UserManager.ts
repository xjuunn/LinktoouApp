import User from '../types/User'
export default class UserManager {

    constructor() { }

    static userList: Map<string, User> = new Map();

    public addUser(user: User): User {
        UserManager.userList.set(user.id, user);
        return user;
    }

    public addUserByInfo(id: string, name: string, conn: any): User {
        let user = new User(id, name, conn);
        this.addUser(user);
        return user;
    }

    public findUserById(id: string): User | undefined {
        return UserManager.userList.get(id);
    }

    public getUserList(): Map<string, User> {
        return UserManager.userList;
    }



}