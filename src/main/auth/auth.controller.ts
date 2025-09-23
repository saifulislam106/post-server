import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: CreateAuthDto) {
    return this.authService.signup(data);
  }

  @Post('signin')
  signin(@Body() data: CreateAuthDto) {
    return this.authService.signin(data.email, data.password);
  }
}
