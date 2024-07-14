import Peer from "peerjs";

let peer = null;
let userManager = new UserManager();
let messageManager = new MessageManager();
export const usePeer = () => {
  // 初始化 Peer
  if (!peer) peer = new Peer();
  // 连接
  function connect(peer_id) {
    let conn = peer.connect(peer_id);
    conn.on("open", () => {
      connected(userManager.addUserByInfo(peer_id, peer_id, conn));
    });
  }
  // 被连接
  peer.on("connection", (conn) => {
    connected(userManager.addUserByInfo(conn.peer, conn.peer, conn));
  });
  // 发送消息
  function sendById(peer_id, message) {
    let user = userManager.findUserById(peer_id);
    user.conn.send(message);
  }

  function connected(user) {
    user.conn.on("data", (data) => {
      messageManager.messageHandler(user.id, data);
    });
  }

  return {
    peer,
    connect,
    sendById,
  };
};
