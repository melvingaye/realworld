import { Module } from '@nestjs/common';
import { ParentOrganizationController } from './parent-organization.controller';
import { ParentOrganizationService } from './parent-organization.service';

@Module({
  imports: [],
  controllers: [ParentOrganizationController],
  providers: [ParentOrganizationService],
})
export class ParentOrganizationModule {}
