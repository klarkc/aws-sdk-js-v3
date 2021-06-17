import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "../commands/ListDatasetGroupsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetGroups(config: PersonalizePaginationConfiguration, input: ListDatasetGroupsCommandInput, ...additionalArguments: any): Paginator<ListDatasetGroupsCommandOutput>;
