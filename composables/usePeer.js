import { SystemMessage, SystemMessageType } from "~/types/chat/Message";
import Peer from "peerjs";
let peer = null;
export const usePeer = (init_peer_id) => {
  if (!peer && import.meta.client) {
    peer = new Peer(init_peer_id ? init_peer_id : null);
    // 被连接
    peer.on("connection", (conn) => {
      connected(
        UserManager.addUserByInfo(conn.peer, conn.peer.substring(0, 6), conn)
      );
    });
  }
  /**
   * 主动连接
   * @param {*} peer_id 对方ID
   * @param {*} call 连接成功回调
   */
  function connect(peer_id, call) {
    let conn = peer.connect(peer_id);
    conn.on("open", () => {
      connected(
        UserManager.addUserByInfo(peer_id, peer_id.substring(0, 6), conn)
      );
      call();
    });
  }

  // 发送消息
  function send(message) {
    let user = UserManager.findUserById(message.user_peer_id);
    if (user) user.conn.send(message);
    else console.error("未找到用户: " ,message.user_peer_id);
  }

  function connected(user) {
    user.conn.on("data", (data) => {
      MessageManager.messageHandler(data);
    });
    send(
      new SystemMessage(SystemMessageType.DataAsync)
    );
  }

  return {
    peer,
    connect,
    send
  };
};
