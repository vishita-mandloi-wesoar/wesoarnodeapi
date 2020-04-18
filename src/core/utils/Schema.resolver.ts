import {languageResolver} from "../../language/Langauge.resolver";

import {designationResolver} from "../../designation/Designation.resolver";
import {organizationResolver} from "../../organization/Organization.resolver";
import {userResolver} from "../../user/User.resolver";

const resolvers = {
    Query: {
        ...languageResolver,
        ...designationResolver,
        ...organizationResolver,
        ...userResolver
    }
}
export default resolvers;