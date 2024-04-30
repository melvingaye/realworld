import { Module } from '@nestjs/common';
import { ParentOrganizationController } from './parent-organization/parent-organization.controller';
import { OrganizationController } from './organizations/organization.controller';
import { ParentOrganizationService } from './parent-organization/parent-organization.service';
import { OrganizationService } from './organizations/organization.service';

@Module({
  imports: [],
  controllers: [ParentOrganizationController, OrganizationController],
  providers: [ParentOrganizationService, OrganizationService],
})
export class AppModule {}
