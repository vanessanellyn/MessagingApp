import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  messagesService: MessagesService;

  constructor(){
    this.messagesService = new MessagesService();
  }

  @Get() 
  listMessages() {

  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log(body)
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id)
  }
}
