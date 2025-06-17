export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _role: UserRole;
  private _createdAt: string;

  constructor({
    id,
    name,
    email,
    role,
  }: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  }) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._role = role;
    this._createdAt = new Date().toISOString();
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get role(): UserRole {
    return this._role;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  // Setters (only for mutable fields)
  set name(value: string) {
    this._name = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set role(value: UserRole) {
    this._role = value;
  }
}