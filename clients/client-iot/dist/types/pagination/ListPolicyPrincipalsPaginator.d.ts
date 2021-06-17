import { ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput } from "../commands/ListPolicyPrincipalsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicyPrincipals(config: IoTPaginationConfiguration, input: ListPolicyPrincipalsCommandInput, ...additionalArguments: any): Paginator<ListPolicyPrincipalsCommandOutput>;
