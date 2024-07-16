import { nanoid } from "nanoid";

export enum NotificationLevel {
    /** 可忽视 手动查看 */
    Ignore,
    /**  一般 弹出查看 */
    General,
    /** 重要 弹出查看 */
    Important,
    /** 非常重要 弹出查看 手动关闭 */
    VeryImportant
}
// import shortid from 'shortid';

export default class AppNotification {
    /**
     * 新建通知 
     * @param origin 通知源
     * @param message 信息
     */
    constructor(origin: string, message: string);
    /**
     * 新建通知
     * @param origin 通知源
     * @param title 标题
     * @param message 信息
     */
    constructor(origin: string, title: string, message: string);
    /**
     * 新建通知
     * @param origin 通知源
     * @param message 信息
     * @param level 通知等级
     */
    constructor(origin: string, message: string, level: NotificationLevel);
    /**
     * 新建通知
     * @param origin 通知源
     * @param title 标题
     * @param message 信息
     * @param level 通知等级
     */
    constructor(origin: string, title: string, message: string, level: NotificationLevel);
    constructor(origin: string, param1: string, param2?: string | NotificationLevel, param3?: NotificationLevel) {
        this.origin = origin;
        if (typeof param2 === "string") {
            this.title = param1;
            this.message = param2;
            this.level = param3 ?? NotificationLevel.Ignore;
        } else {
            this.title = undefined;
            this.message = param1;
            this.level = param2 ?? NotificationLevel.Ignore;
        }
    }

    /** 通知ID */
    // id:string = shortid.generate();
    id:string = nanoid();
    /** 通知图标 */
    icon:string = '';
    /** 通知源 */
    origin: string;
    /** 通知标题 */
    title?: string;
    /** 通知内容 */
    message: string;
    /** 通知级别 */
    level: NotificationLevel;
    /** 通知类型  */
    type:string = '';
    /** 通知时间 */
    time: Date = new Date();
    /** 确定按钮事件 */
    okHandler:{text:string,handler:Function}|null = null;
    /** 取消按钮事件 */
    cancelHandler:{text:string,handler:Function}|null = null;
}
