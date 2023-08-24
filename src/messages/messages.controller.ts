import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService){}

  @Get() 
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if(!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}

/*
  CLASS DECORATOR 
    @Controller() 

  METHOD DECORATOR
    @Get() and @Post()

  ARGUMENT DECORATOR
    @Body()       = Get the content of the HTTP request
    @Param('id')  = Get the argument of the URL
    @Header()     = Get the local host or content-type
    @Query()      = Get the validation or query string in the URL

*/
