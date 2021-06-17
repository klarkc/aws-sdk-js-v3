import { DescribeCasesCommandInput, DescribeCasesCommandOutput } from "../commands/DescribeCasesCommand";
import { SupportPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCases(config: SupportPaginationConfiguration, input: DescribeCasesCommandInput, ...additionalArguments: any): Paginator<DescribeCasesCommandOutput>;
