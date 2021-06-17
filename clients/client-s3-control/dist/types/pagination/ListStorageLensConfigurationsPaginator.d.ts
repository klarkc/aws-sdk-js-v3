import { ListStorageLensConfigurationsCommandInput, ListStorageLensConfigurationsCommandOutput } from "../commands/ListStorageLensConfigurationsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStorageLensConfigurations(config: S3ControlPaginationConfiguration, input: ListStorageLensConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListStorageLensConfigurationsCommandOutput>;
