import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "../commands/ListDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDistributions(
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDistributionsCommandOutput>;
