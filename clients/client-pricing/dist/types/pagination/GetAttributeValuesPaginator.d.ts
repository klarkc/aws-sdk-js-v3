import { GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput } from "../commands/GetAttributeValuesCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAttributeValues(config: PricingPaginationConfiguration, input: GetAttributeValuesCommandInput, ...additionalArguments: any): Paginator<GetAttributeValuesCommandOutput>;
