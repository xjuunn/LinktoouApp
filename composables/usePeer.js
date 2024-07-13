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
      userManager.addUserByInfo(peer_id, peer_id, conn);
      conn.on("data", (data) => {
        messageManager.messageHandler(conn.peer, data);
      });
    });
  }
  // 被连接
  peer.on("connection", (conn) => {
    userManager.addUserByInfo(conn.peer, conn.peer, conn);
    conn.on("data", (data) => {
      messageManager.messageHandler(conn.peer, data);
    });
  });
  // 发送消息
  function sendById(peer_id, message) {
    let user = userManager.findUserById(peer_id);
    user.conn.send(message);
  }

  return {
    peer,
    connect,
    sendById,
  };
};
