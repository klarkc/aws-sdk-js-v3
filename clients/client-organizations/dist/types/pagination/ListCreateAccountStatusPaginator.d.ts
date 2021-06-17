import { ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput } from "../commands/ListCreateAccountStatusCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCreateAccountStatus(config: OrganizationsPaginationConfiguration, input: ListCreateAccountStatusCommandInput, ...additionalArguments: any): Paginator<ListCreateAccountStatusCommandOutput>;
