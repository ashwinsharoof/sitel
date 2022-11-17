import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user.interface';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService,)
    {}

    @Post()
    async create(
        @Body() UserDto: UserDto,
    ): Promise<string | User> {
        
        const data = await this.UserService.create(
            UserDto
        );
        if (data) {
            return data
        } 
        else{
            return "Not able to save user"
        }
    }
    @Get('/:id')
    async get(@Param('id') id: string): Promise<any> {
        const data = await this.UserService.findMy(id);
        if (data) {
            return data
            
        } else {
            return "NOT_SUCCESSFULLY_GET_USER"
        }
    }

    @Delete('/:id')
    async remove(@Param('id') id: string): Promise<any> {
        const data = await this.UserService.remove(id);
        if (data) {
            return data
            
        } else {
            return "NOT_SUCCESSFULLY_DELETED_USER"
        }
    }
}
