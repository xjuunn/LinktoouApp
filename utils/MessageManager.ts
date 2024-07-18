import {
    Message, TextMessage, SystemMessageType,
    MessageType, EmojiMessage, FileMessage,
    ImageMessage, MessageStatus, SystemMessage, VideoMessage
} from '~/types/chat/Message';

export default class MessageManager {

    public static messageHandler(peer_id: string, message: Message) {
        
        switch (message.type) {
            case MessageType.Text:
                this.handleTextMessage(peer_id, message as TextMessage);
                break;
            case MessageType.System:
                this.handleSystemMessage(peer_id, message as SystemMessage);
                break;
            case MessageType.Emoji:
                this.handleEmojiMessage(peer_id, message as EmojiMessage);
                break;
            case MessageType.File:
                this.handleFileMessage(peer_id, message as FileMessage);
                break;
            case MessageType.Image:
                this.handleImageMessage(peer_id, message as ImageMessage);
                break;
            case MessageType.Video:
                this.handleVideoMessage(peer_id, message as VideoMessage);
                break;
            default:
                console.error(`未知的消息类型: ${message.type}`);
        }
    }
    
    static handleTextMessage(peer_id: string, message: TextMessage) {
        console.log("处理文字消息",message);
    }
    
    static handleImageMessage(peer_id: string, message: ImageMessage) {
        console.log("处理图片消息",message);
    }
    
    static handleVideoMessage(peer_id: string, message: VideoMessage) {
        console.log("处理视频消息",message);
    }
    
    static handleFileMessage(peer_id: string, message: FileMessage) {
        console.log("处理文件消息",message);
    }

    static handleEmojiMessage(peer_id: string, message: EmojiMessage) {
        console.log("处理Emoji消息",message);
    }
    /** 处理系统消息 */
    static handleSystemMessage(peer_id: string, message: SystemMessage) {
        console.log("处理系统消息",message);
    }

    // TODO 很多的消息处理函数
    
    
    
    
    
}
