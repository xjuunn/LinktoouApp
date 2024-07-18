import { ref } from "vue";
import AppNotification, { NotificationLevel } from '../types/AppNotification';

export default class NotificationManager {

    /** 所有通知列表 */
    static notificationList: Ref<AppNotification[]> = ref([]);
    /** 可显示通知列表 */
    static notificationShowList: Ref<AppNotification[]> = ref([]);

    /** 添加一条通知 */
    static pushNotification(notification: AppNotification): AppNotification {
        NotificationManager.notificationList.value.push(notification);
        if (notification.level >= NotificationLevel.General) {
            NotificationManager.pushShowNotification(notification);
        }
        return notification;
    }

    /** 根据ID获取通知 */
    static getNotificationById(id: string): AppNotification | null {
        for (const item of NotificationManager.notificationList.value) {
            if (item.id === id) {
                return item;
            }
        }
        return null;
    }

    /** 添加到可显示通知列表 规定时间后消失 */
    static pushShowNotification(notification: AppNotification) {
        NotificationManager.notificationShowList.value.push(notification);
        if (notification.level < NotificationLevel.Important) {
            setTimeout(() => {
                this.closeNotificationById(notification.id);
            }, 3000);
        }

    }

    /** 关闭一个通知弹窗 */
    static closeNotificationById(id: string): string | null {
        for (let i = 0; i < NotificationManager.notificationShowList.value.length; i++) {
            if (NotificationManager.notificationShowList.value[i].id === id) {
                NotificationManager.notificationShowList.value.splice(i, 1);
                return id;
            }
        }
        return null;
    }

}
