import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrganizationService } from './organization.service';
import { OrganizationRequest } from './dtos/organization-request.dto';
import { OrganizationUpdate } from './dtos/organization-update.dto';
import { OrganizationQuery } from './dtos/organization-query.dto';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private orgService: OrganizationService) {}

  @Post()
  create(@Body() req: OrganizationRequest) {
    return this.orgService.create(req);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.orgService.get(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() req: OrganizationUpdate) {
    return this.orgService.update(id, req);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.orgService.delete(id);
  }

  @Get()
  list(@Query() query?: OrganizationQuery) {
    return this.orgService.list(query);
  }
}
