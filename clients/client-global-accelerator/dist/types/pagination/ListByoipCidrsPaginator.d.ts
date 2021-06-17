import { ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput } from "../commands/ListByoipCidrsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListByoipCidrs(config: GlobalAcceleratorPaginationConfiguration, input: ListByoipCidrsCommandInput, ...additionalArguments: any): Paginator<ListByoipCidrsCommandOutput>;
