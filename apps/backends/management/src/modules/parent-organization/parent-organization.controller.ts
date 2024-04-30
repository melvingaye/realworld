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
import { ParentOrganizationService } from './parent-organization.service';
import { ParentOrganizationRequest } from './dtos/parent-organization.dto';
import { ParentOrganizationUpdate } from './dtos/parent-organization-update.dto';
import { ParentOrganizationQuery } from './dtos/parent-organization-query.dto';

@ApiTags('Parent Organization')
@Controller('parent-organization')
export class ParentOrganizationController {
  constructor(private parentOrgService: ParentOrganizationService) {}

  @Post()
  create(@Body() req: ParentOrganizationRequest) {
    return this.parentOrgService.create(req);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.parentOrgService.get(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() req: ParentOrganizationUpdate) {
    return this.parentOrgService.update(id, req);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.parentOrgService.delete(id);
  }

  @Get()
  list(@Query() query?: ParentOrganizationQuery) {
    return this.parentOrgService.list(query);
  }
}
