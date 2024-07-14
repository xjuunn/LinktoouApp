import type { DataConnection } from "peerjs";

export default class UserInfoManager {

    /**
     * 用户的 peer_id
     */
    static id: string;
    /**
     * 用户名
     */
    static name: string;
    /**
     * 用户头像URL
     */
    static avatar_url: string;
    /**
     * 用户联系方式
     */
    static contact: Contact;
    /**
     * 用户的Peerjs Connect对象
     */
    static conn: DataConnection;
    /**
     * RSA加密公钥
     */
    static public_rsa_key: string;
    /**
     * RSA加密私钥
     */
    static private_rsa_key: string;
}

interface Contact {
    phone?: string;
    email?: string;
    qq?: string;
    wxid?: string;
    telegram?: string;
}