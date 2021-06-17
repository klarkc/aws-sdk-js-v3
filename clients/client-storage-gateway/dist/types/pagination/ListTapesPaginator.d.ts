import { ListTapesCommandInput, ListTapesCommandOutput } from "../commands/ListTapesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTapes(config: StorageGatewayPaginationConfiguration, input: ListTapesCommandInput, ...additionalArguments: any): Paginator<ListTapesCommandOutput>;
