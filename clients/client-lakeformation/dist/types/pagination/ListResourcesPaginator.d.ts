import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { LakeFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResources(config: LakeFormationPaginationConfiguration, input: ListResourcesCommandInput, ...additionalArguments: any): Paginator<ListResourcesCommandOutput>;
