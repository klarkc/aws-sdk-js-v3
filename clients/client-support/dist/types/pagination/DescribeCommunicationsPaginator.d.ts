import { DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput } from "../commands/DescribeCommunicationsCommand";
import { SupportPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCommunications(config: SupportPaginationConfiguration, input: DescribeCommunicationsCommandInput, ...additionalArguments: any): Paginator<DescribeCommunicationsCommandOutput>;
