import { MediaConnection, } from "peerjs";
export class MediaStreamManager {
    private static mediaStreamList: Ref<MediaStream[]> = ref([]);

    /**
     * 添加流媒体到流媒体列表   
     * @param mediaStream 流媒体对象
     */
    public static addMediaStream(mediaStream: MediaStream) {
        MediaStreamManager.mediaStreamList.value.push(mediaStream);
    }
    /**
     * 获取流媒体对象列表
     * @returns 响应式流媒体列表
     */
    public static getMediaStreamList(): Ref<MediaStream[]> {
        return MediaStreamManager.mediaStreamList;
    }
    /**
     * 根据用户ID查找流媒体对象
     * @param peer_id 媒体的用户 peeer_id
     * @returns 流媒体对象
     */
    public static findMeidaStreamById(peer_id: string): MediaStream |undefined{
        for (let index = 0; index < this.mediaStreamList.value.length; index++) {
            const item = this.mediaStreamList.value[index];
            console.log('findMediaStreamById:',item);            
            return item;
        }
        return undefined;
        // TODO 如果一个用户创建了多个流媒体，需要增加流媒体筛选。
    }




}