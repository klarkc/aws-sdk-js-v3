import { ListManagedEndpointsCommandInput, ListManagedEndpointsCommandOutput } from "../commands/ListManagedEndpointsCommand";
import { EMRContainersPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListManagedEndpoints(config: EMRContainersPaginationConfiguration, input: ListManagedEndpointsCommandInput, ...additionalArguments: any): Paginator<ListManagedEndpointsCommandOutput>;
