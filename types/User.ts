import type { DataConnection } from "peerjs";

export default class User {
    constructor(id: string, name: string, conn: DataConnection) {
        this.id = id;
        this.name = name;
        this.conn = conn;
    }

    /** 用户 peer_id*/
    id: string;
    /** 用户名*/
    name: string;
    /** 用户 peer Dataconnection对象*/
    conn: DataConnection;
    /** 用户头像url*/
    avatar_url: string = '';
    /** 是否在线 */
    online: boolean = false;
    /** 用户RSA加密公钥 */
    public_rsa_key: string = '';
    /** 最后一条信息 */
    lastMessage:string='';
    /** 最后接收或发送消息的时间 */
    lastTime:Date|null = null;

}
