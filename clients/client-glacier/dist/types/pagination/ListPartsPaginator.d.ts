import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { GlacierPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListParts(config: GlacierPaginationConfiguration, input: ListPartsCommandInput, ...additionalArguments: any): Paginator<ListPartsCommandOutput>;
