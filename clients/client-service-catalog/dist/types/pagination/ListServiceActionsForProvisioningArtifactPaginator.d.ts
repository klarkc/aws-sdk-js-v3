import { ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput } from "../commands/ListServiceActionsForProvisioningArtifactCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServiceActionsForProvisioningArtifact(config: ServiceCatalogPaginationConfiguration, input: ListServiceActionsForProvisioningArtifactCommandInput, ...additionalArguments: any): Paginator<ListServiceActionsForProvisioningArtifactCommandOutput>;
