import { ListThingPrincipalsCommandInput, ListThingPrincipalsCommandOutput } from "../commands/ListThingPrincipalsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingPrincipals(config: IoTPaginationConfiguration, input: ListThingPrincipalsCommandInput, ...additionalArguments: any): Paginator<ListThingPrincipalsCommandOutput>;
