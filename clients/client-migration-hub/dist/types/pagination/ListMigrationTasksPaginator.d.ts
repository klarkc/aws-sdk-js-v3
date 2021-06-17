import { ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput } from "../commands/ListMigrationTasksCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMigrationTasks(config: MigrationHubPaginationConfiguration, input: ListMigrationTasksCommandInput, ...additionalArguments: any): Paginator<ListMigrationTasksCommandOutput>;
