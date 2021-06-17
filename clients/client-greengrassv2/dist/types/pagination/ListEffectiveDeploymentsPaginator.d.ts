import { ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput } from "../commands/ListEffectiveDeploymentsCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEffectiveDeployments(config: GreengrassV2PaginationConfiguration, input: ListEffectiveDeploymentsCommandInput, ...additionalArguments: any): Paginator<ListEffectiveDeploymentsCommandOutput>;
