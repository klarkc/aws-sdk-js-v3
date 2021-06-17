import { ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput } from "../commands/ListAssetRelationshipsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssetRelationships(config: IoTSiteWisePaginationConfiguration, input: ListAssetRelationshipsCommandInput, ...additionalArguments: any): Paginator<ListAssetRelationshipsCommandOutput>;
