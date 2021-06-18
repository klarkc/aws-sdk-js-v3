import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "../commands/ListWorkGroupsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkGroups(
  config: AthenaPaginationConfiguration,
  input: ListWorkGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkGroupsCommandOutput>;
