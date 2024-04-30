import { ParentOrganizationQuery } from './dtos/parent-organization-query.dto';
import { ParentOrganizationUpdate } from './dtos/parent-organization-update.dto';
import { ParentOrganizationRequest } from './dtos/parent-organization.dto';

export class ParentOrganizationService {
  create(req: ParentOrganizationRequest) {
    console.log(`Org created ${req}`);
    return 'create';
  }

  get(id: string) {
    console.log(`Org found ${id}`);
    return 'get';
  }

  update(id: string, req: ParentOrganizationUpdate) {
    console.log(`Org ${id} updated ${req}`);
    return 'update';
  }

  delete(id: string) {
    console.log(`Org ${id} deleted`);
    return 'delete';
  }

  list(query?: ParentOrganizationQuery) {
    console.log(`Searching for ${query}`);
    return 'list';
  }
}
