import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDeployments(
  config: APIGatewayPaginationConfiguration,
  input: GetDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<GetDeploymentsCommandOutput>;
