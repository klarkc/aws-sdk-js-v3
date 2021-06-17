import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "../commands/ListMLTransformsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMLTransforms(config: GluePaginationConfiguration, input: ListMLTransformsCommandInput, ...additionalArguments: any): Paginator<ListMLTransformsCommandOutput>;
