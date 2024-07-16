import shortid from 'shortid';
import AppNotification, { NotificationLevel } from '../types/AppNotification';

export class AppNotificationBuilder {
    private icon: string;
    private origin: string;
    private title: string;
    private message: string;
    private level: NotificationLevel;
    private okHandler:{text:string,handler:Function}|null;
    private cancelHandler:{text:string,handler:Function}|null;

    constructor() {
        this.icon = '';
        this.origin = '';
        this.title = '';
        this.message = '';
        this.level = NotificationLevel.General;
        this.okHandler = null;
        this.cancelHandler = null;
    }
    /** 设置通知源 */
    setOrigin(origin: string): AppNotificationBuilder {
        this.origin = origin;
        return this;
    }
    /** 设置通知标题 */
    setTitle(title: string): AppNotificationBuilder {
        this.title = title;
        return this;
    }
    /** 设置通知信息 */
    setMessage(message: string): AppNotificationBuilder {
        this.message = message;
        return this;
    }
    /** 设置通知等级 */
    setLevel(level: NotificationLevel): AppNotificationBuilder {
        this.level = level;
        return this;
    }
    /** 设置通知ICON SVG的d属性 */
    setIcon(icon: string): AppNotificationBuilder {
        this.icon = icon;
        return this;
    }
    /**
     * 添加确认按钮 
     * @param text 按钮文本
     * @param handler 处理函数
     * @returns 
     */
    setOkHandler(text:string,handler:Function){
        this.okHandler = {text,handler};
        return this;
    }
    /**
     * 添加取消按钮
     * @param text 按钮文本
     * @param handler 处理函数
     * @returns 
     */
    setCancelHandler(text:string,handler:Function){
        this.cancelHandler = {text,handler};
        return this;
    }
    
    /** 构建通知对象 */
    build(): AppNotification {
        let notification = new AppNotification(this.origin, this.title, this.message, this.level)
        notification.icon = this.icon;
        notification.okHandler = this.okHandler;
        notification.cancelHandler = this.cancelHandler;
        return notification;
    }
}
