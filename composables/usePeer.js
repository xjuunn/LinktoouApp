import Peer from "peerjs";
let peer = null;
export const usePeer = (init_peer_id) => {
  if (!peer && import.meta.client) {
    peer = new Peer(init_peer_id ? init_peer_id : null);
    // 被连接
    peer.on("connection", (conn) => {
      connected(UserManager.addUserByInfo(conn.peer, conn.peer, conn));
    });
  }
    /**
     * 主动连接
     * @param {*} peer_id 对方ID
     * @param {*} call 连接成功回调
     */
  function connect(peer_id,call) {
    let conn = peer.connect(peer_id);
    conn.on("open", () => {
      connected(UserManager.addUserByInfo(peer_id, peer_id, conn));
      call();
    });
  }

  // 发送消息
  function sendById(peer_id, message) {
    let user = UserManager.findUserById(peer_id);
    user.conn.send(message);
  }

  function connected(user) {
    user.conn.on("data", (data) => {
      MessageManager.messageHandler(user.id, data);
    });
  }

  return {
    peer,
    connect,
    sendById,
  };
};
