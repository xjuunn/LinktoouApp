import { nanoid } from "nanoid";
/** 消息类型 */
export enum MessageType {
    /** 系统消息 */ System = 'system',
    /** 文字消息 */ Text = 'text',
    /** 图片消息 */ Image = 'image',
    /** 视频消息 */ Video = 'video',
    /** Emoji消息 */ Emoji = 'emoji',
    /** 文件消息 */ File = 'file',
}
/** 消息状态 */
export enum MessageStatus {
    /** 正在发送 */ Sending = 'sending',
    /** 发送失败 */ Error = 'error',
    /** 发送成功 */ Delivered = 'delivered',
    /** 已读 */ Read = 'read',
}
/** 系统消息类型 */
export enum SystemMessageType {
    /** 在线检测 */ Ping = 'ping',
    /** 数据同步 */ DataAsync = 'dataasync',
    /** 通知 */ Notification = 'notification',
    /** 错误 */ Error = 'error',
    /** 警告 */ Warning = 'warning',
    /** 屏幕共享请求 */ ScreenShare = 'screenShare',
    /** 语音通话请求 */ Call = 'call',
    /** 视频通话请求 */ VideoCall = 'videocall',
    // TODO 功能待实现
}
export class Message {
    /** 消息唯一ID */
    id: string;
    /** 接收者 Peer ID */
    user_peer_id: string;
    /** 发送者 Peer ID */
    send_user_peer_id:string = UserInfoManager.id.value;
    /** 消息类型 */
    type: MessageType;
    /** 消息状态 */
    status: MessageStatus;
    /** 时间戳 */
    timestamp: number;

    constructor(user_peer_id: string, type: MessageType) {
        this.id = nanoid();
        this.user_peer_id = user_peer_id;
        this.type = type;
        this.status = MessageStatus.Sending;
        this.timestamp = Date.now();
    }
}

// 文字消息类
export class TextMessage extends Message {
    /** 消息主体 */
    message: string;

    constructor(user_peer_id: string, message: string) {
        super(user_peer_id, MessageType.Text);
        this.message = message;
    }
}

// 图片消息类
export class ImageMessage extends Message {
    /** 图片URL */
    imageUrl: string;
    /** 图片的替代文字（可选） */
    altText?: string;

    constructor(user_peer_id: string, imageUrl: string, altText?: string) {
        super(user_peer_id, MessageType.Image);
        this.imageUrl = imageUrl;
        this.altText = altText;
    }
}

// 视频消息类
export class VideoMessage extends Message {
    /** 视频URL */
    videoUrl: string;
    /** 视频缩略图URL（可选） */
    thumbnailUrl?: string;
    /**
     * @param user_peer_id ID
     * @param videoUrl URL
     * @param thumbnailUrl 缩略图ID
     */
    constructor(user_peer_id: string, videoUrl: string, thumbnailUrl?: string) {
        super(user_peer_id, MessageType.Video);
        this.videoUrl = videoUrl;
        this.thumbnailUrl = thumbnailUrl;
    }
}

// 表情消息类
export class EmojiMessage extends Message {
    /** 表情字符 */
    emoji: string;

    constructor(user_peer_id: string, emoji: string) {
        super(user_peer_id, MessageType.Emoji);
        this.emoji = emoji;
    }
}

// 文件消息类
export class FileMessage extends Message {
    /** 文件URL */
    fileUrl: string;
    /** 文件名 */
    fileName: string;

    constructor(user_peer_id: string, fileUrl: string, fileName: string) {
        super(user_peer_id, MessageType.File);
        this.fileUrl = fileUrl;
        this.fileName = fileName;
    }
}

// 系统消息类
export class SystemMessage extends Message {
    /** 系统消息内容 */
    message: string;
    /** 系统消息类型 */
    systemMessageType:SystemMessageType;

    constructor(systemMessageType:SystemMessageType,message?: string) {
        super('system', MessageType.System);
        this.systemMessageType = systemMessageType;
        this.message = message??'';
    }
}


