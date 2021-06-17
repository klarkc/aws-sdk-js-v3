import { GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput } from "../commands/GetResourceShareAssociationsCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourceShareAssociations(config: RAMPaginationConfiguration, input: GetResourceShareAssociationsCommandInput, ...additionalArguments: any): Paginator<GetResourceShareAssociationsCommandOutput>;
