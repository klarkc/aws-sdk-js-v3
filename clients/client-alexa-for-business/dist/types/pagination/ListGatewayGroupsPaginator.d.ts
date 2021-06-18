import { ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput } from "../commands/ListGatewayGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGatewayGroups(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewayGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayGroupsCommandOutput>;
