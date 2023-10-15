import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {getArticles} from '../config/db'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/articles')
  async getArticles() {
    const articles = await getArticles();
    return articles;
  }

}
