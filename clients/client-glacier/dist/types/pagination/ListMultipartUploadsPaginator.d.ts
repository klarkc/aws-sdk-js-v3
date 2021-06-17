import { ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput } from "../commands/ListMultipartUploadsCommand";
import { GlacierPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMultipartUploads(config: GlacierPaginationConfiguration, input: ListMultipartUploadsCommandInput, ...additionalArguments: any): Paginator<ListMultipartUploadsCommandOutput>;
