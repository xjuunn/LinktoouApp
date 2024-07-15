import { RSAKey } from "jsencrypt/lib/lib/jsbn/rsa";
import type { DataConnection } from "peerjs";

export default class UserInfoManager {

    /** 用户的 peer_id */
    static id: Ref<string> = ref('');
    /** 用户名 */
    static name: Ref<string> = ref('');
    /** 用户头像URL */
    static avatar_url: Ref<string> = ref('');
    /** 用户联系方式 */
    static contact: Ref<Contact> = ref({});
    /** 用户的Peerjs Connect对象 */
    static conn: DataConnection;
    /** RSA加密公钥 */
    static public_rsa_key: string;
    /** RSA加密私钥 */
    static private_rsa_key: string;
    /** 用户是否在线 */
    static isOnline: Ref<boolean> = ref(false);
}

interface Contact {
    phone?: string;
    email?: string;
    qq?: string;
    wxid?: string;
    telegram?: string;
}