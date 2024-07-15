import Peer from "peerjs";
let peer = null;
export const usePeer = (init_peer_id) => {
  if (!peer) peer = new Peer(init_peer_id?init_peer_id:null);
  // 手动初始化
  function init(){
    peer = new Peer(init_peer_id?init_peer_id:null);
  }
  // 连接其他用户
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
    init,
    connect,
    sendById,
  };
};
