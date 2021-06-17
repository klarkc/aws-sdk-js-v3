import { ListListenersCommandInput, ListListenersCommandOutput } from "../commands/ListListenersCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListListeners(config: GlobalAcceleratorPaginationConfiguration, input: ListListenersCommandInput, ...additionalArguments: any): Paginator<ListListenersCommandOutput>;
