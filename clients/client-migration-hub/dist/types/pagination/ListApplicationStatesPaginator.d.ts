import { ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput } from "../commands/ListApplicationStatesCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplicationStates(config: MigrationHubPaginationConfiguration, input: ListApplicationStatesCommandInput, ...additionalArguments: any): Paginator<ListApplicationStatesCommandOutput>;
