import { GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput } from "../commands/GetProvisionedProductOutputsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetProvisionedProductOutputs(config: ServiceCatalogPaginationConfiguration, input: GetProvisionedProductOutputsCommandInput, ...additionalArguments: any): Paginator<GetProvisionedProductOutputsCommandOutput>;
