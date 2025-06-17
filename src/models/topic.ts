export class Topic {
  private _id: string;
  private _name: string;
  private _content: string;
  private _version: string;
  private _parentTopicId?: string;
  private _createdAt: string;
  private _updatedAt: string;

  constructor({
    id,
    name,
    content,
    version,
    parentTopicId,
  }: {
    id: string;
    name: string;
    content: string;
    version: string;
    parentTopicId?: string;
  }) {
    this._id = id;
    this._name = name;
    this._content = content;
    this._version = version;
    this._parentTopicId = parentTopicId;
    this._createdAt = new Date().toISOString();
    this._updatedAt = new Date().toISOString();
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get content(): string {
    return this._content;
  }

  get version(): string {
    return this._version;
  }

  get parentTopicId(): string | undefined {
    return this._parentTopicId;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  // Setters (only for editable fields)
  set name(value: string) {
    this._name = value;
    this.touchUpdatedAt();
  }

  set content(value: string) {
    this._content = value;
    this.touchUpdatedAt();
  }

  set version(value: string) {
    this._version = value;
    this.touchUpdatedAt();
  }

  set parentTopicId(value: string | undefined) {
    this._parentTopicId = value;
    this.touchUpdatedAt();
  }

  // Internal method to update the timestamp
  private touchUpdatedAt() {
    this._updatedAt = new Date().toISOString();
  }
}