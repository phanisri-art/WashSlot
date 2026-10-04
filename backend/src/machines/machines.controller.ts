import { Controller, Get } from '@nestjs/common';

@Controller('machines')
export class MachinesController {
  @Get()
  getMachines() {
    return [
      {
        id: 1,
        machineNumber: 1,
        status: 'AVAILABLE',
      },
      {
        id: 2,
        machineNumber: 2,
        status: 'AVAILABLE',
      },
    ];
  }
}