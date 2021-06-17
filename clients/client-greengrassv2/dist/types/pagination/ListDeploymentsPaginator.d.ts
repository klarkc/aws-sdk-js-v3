import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeployments(config: GreengrassV2PaginationConfiguration, input: ListDeploymentsCommandInput, ...additionalArguments: any): Paginator<ListDeploymentsCommandOutput>;
