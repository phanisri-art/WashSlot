import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getStatus() {
    return {
      message: 'WashSlot API is running',
      status: 'success',
      project: 'WashSlot',
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'healthy',
      service: 'WashSlot API',
    };
  }
}