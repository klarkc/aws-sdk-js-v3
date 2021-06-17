import { ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput } from "../commands/ListInstanceAttributesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceAttributes(config: ConnectPaginationConfiguration, input: ListInstanceAttributesCommandInput, ...additionalArguments: any): Paginator<ListInstanceAttributesCommandOutput>;
