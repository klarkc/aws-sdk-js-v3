import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "../commands/ListGroupsForUserCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroupsForUser(config: IAMPaginationConfiguration, input: ListGroupsForUserCommandInput, ...additionalArguments: any): Paginator<ListGroupsForUserCommandOutput>;
