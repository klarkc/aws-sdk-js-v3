import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "../commands/ListOpsMetadataCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOpsMetadata(config: SSMPaginationConfiguration, input: ListOpsMetadataCommandInput, ...additionalArguments: any): Paginator<ListOpsMetadataCommandOutput>;
