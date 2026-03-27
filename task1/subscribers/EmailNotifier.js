import eventBus from "../pubsub/EventBus.js";

export class EmailNotifier {
  constructor(email) {
    this.email = email;
    this.subscriptions = [];
    this.sentCount = 0;
  }

  subscribe(categories) {
    categories.forEach(category => {
      const unsub = eventBus.subscribe(`news:${category}`, article => {
        this.sendEmail(article);
      });

      this.subscriptions.push(unsub);
    });
  }

  sendEmail(article) {
    this.sentCount++;
    console.log(`[Email ${this.email}] ${article.headline}`);
  }

  unsubscribe() {
    this.subscriptions.forEach(u => u());
    this.subscriptions = [];
  }
}