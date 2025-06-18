import { Topic } from "./topic";

export type ResourceType = 'video' | 'article' | 'pdf';

export class Resource {
  private _id: string;
  private _topic: Topic;
  private _url: string;
  private _description: string;
  private _type: ResourceType;
  private _createdAt: string;
  private _updatedAt: string;

  constructor({
    id,
    topic,
    url,
    description,
    type,
  }: {
    id: string;
    topic: Topic;
    url: string;
    description: string;
    type: ResourceType;
  }) {
    this._id = id;
    this._url = url;
    this._description = description;
    this._type = type;
    this._createdAt = new Date().toISOString();
    this._updatedAt = new Date().toISOString();
    this._topic = topic;
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get topic(): Topic {
    return this._topic;
  }

  get url(): string {
    return this._url;
  }

  get description(): string {
    return this._description;
  }

  get type(): ResourceType {
    return this._type;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  // Setters (only for editable fields)
  set url(value: string) {
    this._url = value;
    this.touchUpdatedAt();
  }

  set description(value: string) {
    this._description = value;
    this.touchUpdatedAt();
  }

  set type(value: ResourceType) {
    this._type = value;
    this.touchUpdatedAt();
  }

  // Internal method to update the timestamp
  private touchUpdatedAt() {
    this._updatedAt = new Date().toISOString();
  }
}