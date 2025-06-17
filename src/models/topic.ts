export class Topic {
  public id?: string;
  public name: string;
  public content: string;
  public version: number;
  public latest: boolean;
  public parentTopicId?: string;
  public createdAt: string;
  public updatedAt: string;

  constructor({
    id,
    name,
    content,
    version,
    parentTopicId,
  }: {
    id?: string;
    name: string;
    content: string;
    version: number;
    parentTopicId?: string;
  }) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.version = version;
    this.latest = true;
    this.parentTopicId = parentTopicId;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}