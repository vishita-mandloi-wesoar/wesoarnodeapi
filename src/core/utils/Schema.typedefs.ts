import {basicQuery} from "./basic.schema";
import {languageTypeDefs} from "../../language/langauge.schema";
import {designationTypeDefs} from "../../designation/designation.schema";
import {organizationTypeDefs} from "../../organization/Organization.schema";
import {userTypeDefs} from "../../user/user.schema";

const appTypeDefs = [basicQuery, languageTypeDefs, designationTypeDefs,organizationTypeDefs,userTypeDefs];
export default appTypeDefs;