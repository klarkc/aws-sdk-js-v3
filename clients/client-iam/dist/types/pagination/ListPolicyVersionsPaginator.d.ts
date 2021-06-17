import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicyVersions(config: IAMPaginationConfiguration, input: ListPolicyVersionsCommandInput, ...additionalArguments: any): Paginator<ListPolicyVersionsCommandOutput>;
