import { OrganizationQuery } from './dtos/organization-query.dto';
import { OrganizationRequest } from './dtos/organization-request.dto';
import { OrganizationUpdate } from './dtos/organization-update.dto';

export class OrganizationService {
  create(req: OrganizationRequest) {
    console.log(`Org created ${req}`);
    return 'create';
  }

  get(id: string) {
    console.log(`Org found ${id}`);
    return 'get';
  }

  update(id: string, req: OrganizationUpdate) {
    console.log(`Org ${id} updated ${req}`);
    return 'update';
  }

  delete(id: string) {
    console.log(`Org ${id} deleted`);
    return 'delete';
  }

  list(query?: OrganizationQuery) {
    console.log(`Searching for ${query}`);
    return 'list';
  }
}
