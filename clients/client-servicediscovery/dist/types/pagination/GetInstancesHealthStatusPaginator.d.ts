import { GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput } from "../commands/GetInstancesHealthStatusCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInstancesHealthStatus(config: ServiceDiscoveryPaginationConfiguration, input: GetInstancesHealthStatusCommandInput, ...additionalArguments: any): Paginator<GetInstancesHealthStatusCommandOutput>;
