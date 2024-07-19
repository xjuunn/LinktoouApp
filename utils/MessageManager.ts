import {
    Message, TextMessage, SystemMessageType,
    MessageType, EmojiMessage, FileMessage,
    ImageMessage, MessageStatus, SystemMessage, VideoMessage
} from '~/types/chat/Message';
export default class MessageManager {
    private static messageQueue: Map<string, NodeJS.Timeout> = new Map(); /** 消息发送队列 */
    private static resendInterval: number = 3000; // 重发延迟
    /** 处理接收到的消息 */
    public static messageHandler(message: Message) {
        switch (message.type) {
            case MessageType.Text:
                this.handleTextMessage(message as TextMessage);
                break;
            case MessageType.System:
                this.handleSystemMessage(message as SystemMessage);
                break;
            case MessageType.Emoji:
                this.handleEmojiMessage(message as EmojiMessage);
                break;
            case MessageType.File:
                this.handleFileMessage(message as FileMessage);
                break;
            case MessageType.Image:
                this.handleImageMessage(message as ImageMessage);
                break;
            case MessageType.Video:
                this.handleVideoMessage(message as VideoMessage);
                break;
            default:
                console.error(`未知的消息类型: ${message.type}`);
        }
    }
    /** 处理接收到的文字消息 */
    private static handleTextMessage(message: TextMessage) {
        console.log("处理文字消息", message);
    }
    /** 处理接收到的图片消息 */
    private static handleImageMessage(message: ImageMessage) {
        console.log("处理图片消息", message);
    }
    /** 处理接收到的视频消息 */
    private static handleVideoMessage(message: VideoMessage) {
        console.log("处理视频消息", message);
    }
    /** 处理接收到的文件消息 */
    private static handleFileMessage(message: FileMessage) {
        console.log("处理文件消息", message);
    }
    /** 处理接收到的Emoji消息 */
    private static handleEmojiMessage(message: EmojiMessage) {
        console.log("处理Emoji消息", message);
    }
    /** 处理接收到的系统消息 */
    private static handleSystemMessage(message: SystemMessage) {
        switch (message.systemMessageType) {
            case SystemMessageType.DataAsync: this.handleSystemDataAsync(message); break;
            case SystemMessageType.Ping: break;
            case SystemMessageType.Call: break;
            case SystemMessageType.Notification: break;
            case SystemMessageType.ScreenShare: break;
            case SystemMessageType.VideoCall: break;
            case SystemMessageType.Error: break;
            case SystemMessageType.Warning: break;
            default: console.error("系统消息类型不存在");

        }
    }
    //#region 接收到的消息处理函数
    private static handleSystemDataAsync(message: SystemMessage) {
        console.log('消息同步，发送本地个人信息', message);

    }
    private static handleSystemPing(message: SystemMessage) { }
    private static handleSystemCall(message: SystemMessage) { }
    private static handleSystemNotification(message: SystemMessage) { }
    private static handleSystemScreenShare(message: SystemMessage) { }
    private static handleSystemVideoCall(message: SystemMessage) { }
    private static handleSystemError(message: SystemMessage) { }
    private static handleSystemWarning(message: SystemMessage) { }
    //#endregion 




    // TODO 很多的消息处理函数


    /**
     * 发送一条消息 
     * @param message 发送的消息对象
     */
    public static sendMessage(message: Message): void {
        this.doSendManager(message);
        const timeoutId = setTimeout(() => {
            this.resendMessage(message);
        }, this.resendInterval);

        this.messageQueue.set(message.id, timeoutId);
    }
    /**
     * 接收到消息回应
     * @param messageId 消息ID
     */
    private static receiveResponse(messageId: string): void {
        const timeoutId = this.messageQueue.get(messageId);
        if (timeoutId) {
            clearTimeout(timeoutId);
            this.messageQueue.delete(messageId);
        }
    }
    /**
     * 消息重发 
     * @param message 消息
     */
    private static resendMessage(message: Message): void {
        console.log(`Resending message: ${message.id}`);
        this.doSendManager(message);

        const timeoutId = setTimeout(() => {
            this.resendMessage(message);
        }, this.resendInterval);

        this.messageQueue.set(message.id, timeoutId);
    }
    /**
     * 发送消息处理逻辑
     * @param message 消息
     */
    private static doSendManager(message: Message): void {
        
        console.log("Sendmanager消息处理",message);
        
        
    }




}
