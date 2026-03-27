import eventBus from "../pubsub/EventBus.js";
export class PushNotifier{
    subscribe(){
        eventBus.subscribe("news:all", article => {
            console.log(`[Push] ${article.headline}`);
        });
    }
}