export class DataFetcher {
    constructor(client) {
      this.client = client;
    }
  
    async fetchUser(id) {
      return this.client.get(`/users/${id}`);
    }
  
    async fetchUserPosts(id) {
      return this.client.get(`/posts?userId=${id}`);
    }
  
    async fetchUserWithDetails(id) {
      const [user, posts] = await Promise.all([
        this.fetchUser(id),
        this.fetchUserPosts(id),
      ]);
  
      return { user, posts };
    }
  
    async fetchMultipleUsers(ids) {
      const results = await Promise.allSettled(
        ids.map(id => this.fetchUser(id))
      );
  
      return {
        success: results.filter(r => r.status === 'fulfilled'),
        failed: results.filter(r => r.status === 'rejected'),
      };
    }
  }