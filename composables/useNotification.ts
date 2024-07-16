import AppNotification, { NotificationLevel } from "../types/AppNotification";
import NotificationManager from "../utils/NotificationManager";

export const useNotification = () => {

    function createNotification(origin: string, title: string, message: string, level: NotificationLevel): void;
    function createNotification(notification: AppNotification): void;
    function createNotification(
        notificationOrOrigin: AppNotification | string,
        title?: string,
        message?: string,
        level?: NotificationLevel
    ): void {
        if (typeof notificationOrOrigin === 'string') {
            if (title && message && level) {
                NotificationManager.pushNotification(new AppNotification(notificationOrOrigin, title, message, level));
            } else {
                throw new Error('Missing parameters for notification');
            }
        } else {
            NotificationManager.pushNotification(notificationOrOrigin);
        }
    }

    return {
        NotificationManager,
        createNotification
    };
};
