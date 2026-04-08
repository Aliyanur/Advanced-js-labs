export class AsyncPipeline {
    constructor() {
      this.stages = [];
    }
  
    use(fn) {
      this.stages.push(fn);
      return this;
    }
  
    async execute(data) {
      let result = data;
  
      for (const stage of this.stages) {
        result = await stage(result);
      }
  
      return result;
    }
  }
  
  export async function mapSequential(items, fn) {
    const results = [];
  
    for (const item of items) {
      results.push(await fn(item));
    }
  
    return results;
  }