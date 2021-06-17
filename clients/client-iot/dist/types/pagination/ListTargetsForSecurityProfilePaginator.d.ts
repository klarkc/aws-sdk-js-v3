import { ListTargetsForSecurityProfileCommandInput, ListTargetsForSecurityProfileCommandOutput } from "../commands/ListTargetsForSecurityProfileCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTargetsForSecurityProfile(config: IoTPaginationConfiguration, input: ListTargetsForSecurityProfileCommandInput, ...additionalArguments: any): Paginator<ListTargetsForSecurityProfileCommandOutput>;
