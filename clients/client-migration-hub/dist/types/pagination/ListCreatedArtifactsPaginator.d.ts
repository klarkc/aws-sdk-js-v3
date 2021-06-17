import { ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput } from "../commands/ListCreatedArtifactsCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCreatedArtifacts(config: MigrationHubPaginationConfiguration, input: ListCreatedArtifactsCommandInput, ...additionalArguments: any): Paginator<ListCreatedArtifactsCommandOutput>;
