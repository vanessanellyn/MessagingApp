import { MessagesRepository } from "./messages.repository";

export class MessagesService {

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content:string) {
    return this.create(content);
  }
}