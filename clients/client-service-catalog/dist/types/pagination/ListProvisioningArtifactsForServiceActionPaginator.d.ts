import { ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput } from "../commands/ListProvisioningArtifactsForServiceActionCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProvisioningArtifactsForServiceAction(config: ServiceCatalogPaginationConfiguration, input: ListProvisioningArtifactsForServiceActionCommandInput, ...additionalArguments: any): Paginator<ListProvisioningArtifactsForServiceActionCommandOutput>;
