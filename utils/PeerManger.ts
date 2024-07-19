import { DataConnection, MediaConnection, Peer, } from 'peerjs';
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
    /**
     * 发送一条消息到对应ID的用户
     * @param id 接收者ID
     * @param message 消息主体
     */
    public static send(id: string, message: Message) {
        UserManager.findUserById(id)?.conn.send(message);
    }
    /**
     * 发送视频或语音
     * @param id 接收者ID
     * @param stream 媒体流
     */
    public static async call(id: string,stream:MediaStream ) {
            let callObj = PeerManager.peer.call(id, stream);
            initializeCallEvents(callObj);
        // let { start, isSupported, stop, enabled } = useDisplayMedia()
        // let stream = await start();
        // if (stream != undefined) {
        //     let callObj = PeerManager.peer.call(id, stream);
        //     initializeCallEvents(callObj);
        //     video.srcObject = stream;
        // } else {
        //     console.error('错误的流媒体对象:', stream);

        // }


    }

    public static test() {


    }
}

/** 初始化通话事件监听器 */
function initializeCallEvents(call: MediaConnection) {
    /** 远程对等体添加 */
    call.on('stream', stream => {
        MediaStreamManager.addMediaStream(stream);
    })
    /** 关闭媒体连接 */
    call.on('close', () => {
        console.log('call-on-close');

    })
    /** 错误 */
    call.on('error', error => {
        console.log('call-on-error', error);

    })
    /** 状态变化 */
    call.on('iceStateChanged', state => {
        console.log('call-on-iceStateChanged', state);

    })
    /**  */
    call.on('willCloseOnRemote', () => {
        console.log('call-on-willCloseOnRemote');

    })

}

/**
 * 初始化数据连接事件
 * @param conn 数据连接对象
 */
function initializeConnectEvents(conn: DataConnection) {
    if (import.meta.server) return;

    conn.on('open', () => {
        console.log('添加用户', conn.peer);
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