import { ListPrincipalsCommandInput, ListPrincipalsCommandOutput } from "../commands/ListPrincipalsCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPrincipals(config: RAMPaginationConfiguration, input: ListPrincipalsCommandInput, ...additionalArguments: any): Paginator<ListPrincipalsCommandOutput>;
