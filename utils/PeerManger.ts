import { DataConnection, Peer, } from 'peerjs';
import type { Message } from '~/types/chat/Message';
export class PeerManager {
    constructor(peer_id?: string) {
        if (peer_id) PeerManager.peer = new Peer(peer_id);
        else PeerManager.peer = new Peer();
        initializePeerEvents(PeerManager.peer);
    }
    static peer: Peer;

    /** 连接其他用户 */
    public static connect(peer_id: string) {
        let conn = this.peer.connect(peer_id);
        initializeConnectEvents(conn);
    }
    public static sendById(id: string, message: Message) {
        UserManager.findUserById(id)?.conn.send(message)
    }


    public static test() {
        

    }
}

/**
 * 初始化数据连接事件
 * @param conn 数据连接对象
 */
function initializeConnectEvents(conn: DataConnection) {
    if (import.meta.server) return;
    
    conn.on('open', () => {
        console.log('添加用户',conn.peer);
        UserManager.addUserByInfo(conn.peer, conn.peer.substring(0, 6), conn);

    })
    conn.on('close', () => {
        console.log('conn-on-close');

    })
    conn.on('data', (data) => {
        console.log('conn-on-data', data);

    })
    conn.on('error', (error) => {
        console.log("conn-on-error", error);

    })
    conn.on('iceStateChanged', (state) => {
        console.log('conn-on-iceStateChanged', state);

    })
}


/**
 * 初始化 Peer 事件
 * @param peer peer
 */
function initializePeerEvents(peer: Peer) {
    if (import.meta.server) return;

    // 建立与 PeerServer 的连接
    peer.on('open', id => {
        console.log('Peer-on-open: ' + id);
        UserInfoManager.isOnline.value = true;
        UserInfoManager.id.value = id;
        
        if (!UserInfoManager.username.value) UserInfoManager.username.value = id.substring(0, 6)
    })
    // Peer 被销毁
    peer.on('close', () => {
        console.log('Peer-on-close');

    })
    // 错误处理
    peer.on('error', (err) => {
        console.error('Peer-on-error: ', err);
    });
    // Peer 被连接
    peer.on('connection', dataConnection => {
        console.log('Peer-on-connection: ', dataConnection);
        initializeConnectEvents(dataConnection);

    })
    // 断开连接 peer.reconnect（） 重连
    peer.on('disconnected', currentId => {
        console.log('Peer-on-disconnected: ', currentId);

    })
    // 呼叫
    peer.on('call', mediaConnection => {
        console.log('Peer-on-call: ', mediaConnection);


    })
}