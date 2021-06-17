import { ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput } from "../commands/ListCustomRoutingAcceleratorsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomRoutingAccelerators(config: GlobalAcceleratorPaginationConfiguration, input: ListCustomRoutingAcceleratorsCommandInput, ...additionalArguments: any): Paginator<ListCustomRoutingAcceleratorsCommandOutput>;
