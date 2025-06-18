export class Topic {
  public id?: string;
  public name: string;
  public content: string;
  public version: number;
  public latest: boolean;
  public parentTopic?: Topic;
  public createdAt: string;
  public updatedAt: string;

  constructor({
    id,
    name,
    content,
    version,
    parentTopic,
  }: {
    id?: string;
    name: string;
    content: string;
    version: number;
    parentTopic?: Topic;
  }) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.version = version;
    this.latest = true;
    this.parentTopic = parentTopic;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}