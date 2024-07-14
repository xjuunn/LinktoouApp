import Peer from "peerjs";
let peer = null;
export const usePeer = () => {
  // 初始化 Peer
  if (!peer) peer = new Peer();
  // 连接
  function connect(peer_id) {
    let conn = peer.connect(peer_id);
    conn.on("open", () => {
      connected(UserManager.addUserByInfo(peer_id, peer_id, conn));
    });
  }
  // 被连接
  peer.on("connection", (conn) => {
    connected(UserManager.addUserByInfo(conn.peer, conn.peer, conn));
  });
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
