import { ListThingTypesCommandInput, ListThingTypesCommandOutput } from "../commands/ListThingTypesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingTypes(config: IoTPaginationConfiguration, input: ListThingTypesCommandInput, ...additionalArguments: any): Paginator<ListThingTypesCommandOutput>;
