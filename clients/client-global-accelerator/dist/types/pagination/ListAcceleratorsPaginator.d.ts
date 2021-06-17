import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "../commands/ListAcceleratorsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccelerators(config: GlobalAcceleratorPaginationConfiguration, input: ListAcceleratorsCommandInput, ...additionalArguments: any): Paginator<ListAcceleratorsCommandOutput>;
