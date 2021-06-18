import {
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeContinuousExports(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeContinuousExportsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeContinuousExportsCommandOutput>;
