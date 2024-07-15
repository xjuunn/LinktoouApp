import User from '../types/User'
/**
 * 存储已连接用户列表
 */
export default class UserManager {

    static userList: Map<string, User> = new Map();

    public static addUser(user: User): User {
        UserManager.userList.set(user.id, user);
        return user;
    }

    public static addUserByInfo(id: string, name: string, conn: any): User {
        let user = new User(id, name, conn);
        this.addUser(user);
        return user;
    }

    public static findUserById(id: string): User | undefined {
        return UserManager.userList.get(id);
    }

    public static getUserList(): Map<string, User> {
        return UserManager.userList;
    }



}