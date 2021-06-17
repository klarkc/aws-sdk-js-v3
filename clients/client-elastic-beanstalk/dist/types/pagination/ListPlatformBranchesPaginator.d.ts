import { ListPlatformBranchesCommandInput, ListPlatformBranchesCommandOutput } from "../commands/ListPlatformBranchesCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlatformBranches(config: ElasticBeanstalkPaginationConfiguration, input: ListPlatformBranchesCommandInput, ...additionalArguments: any): Paginator<ListPlatformBranchesCommandOutput>;
