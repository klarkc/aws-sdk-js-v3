import { ListPagesByContactCommandInput, ListPagesByContactCommandOutput } from "../commands/ListPagesByContactCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPagesByContact(config: SSMContactsPaginationConfiguration, input: ListPagesByContactCommandInput, ...additionalArguments: any): Paginator<ListPagesByContactCommandOutput>;
