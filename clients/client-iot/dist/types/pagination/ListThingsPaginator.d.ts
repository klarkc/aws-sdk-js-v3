import { ListThingsCommandInput, ListThingsCommandOutput } from "../commands/ListThingsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThings(config: IoTPaginationConfiguration, input: ListThingsCommandInput, ...additionalArguments: any): Paginator<ListThingsCommandOutput>;
