import User from '../types/User'
/**
 * 存储已连接用户列表
 */
export default class UserManager {

    static userList: Ref<User[]> = ref([]);

    public static addUser(user: User): User {
        UserManager.userList.value.push(user)
        return user;
    }

    public static addUserByInfo(id: string, name: string, conn: any): User {
        let user = new User(id, name, conn);
        this.addUser(user);
        return user;
    }

    public static findUserById(id: string): User | undefined {
        UserManager.userList.value.forEach((item, index,) => {
            if(item.id === id) return item;
        })
        return undefined;
    }

    public static getUserList(): Ref<User[]> {
        return UserManager.userList;
    }



}