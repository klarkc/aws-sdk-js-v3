import { ListPrincipalThingsCommandInput, ListPrincipalThingsCommandOutput } from "../commands/ListPrincipalThingsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPrincipalThings(config: IoTPaginationConfiguration, input: ListPrincipalThingsCommandInput, ...additionalArguments: any): Paginator<ListPrincipalThingsCommandOutput>;
