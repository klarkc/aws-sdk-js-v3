import { ListCustomRoutingListenersCommandInput, ListCustomRoutingListenersCommandOutput } from "../commands/ListCustomRoutingListenersCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomRoutingListeners(config: GlobalAcceleratorPaginationConfiguration, input: ListCustomRoutingListenersCommandInput, ...additionalArguments: any): Paginator<ListCustomRoutingListenersCommandOutput>;
