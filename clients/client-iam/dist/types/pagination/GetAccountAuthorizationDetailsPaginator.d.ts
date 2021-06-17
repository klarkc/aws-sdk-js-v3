import { GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput } from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAccountAuthorizationDetails(config: IAMPaginationConfiguration, input: GetAccountAuthorizationDetailsCommandInput, ...additionalArguments: any): Paginator<GetAccountAuthorizationDetailsCommandOutput>;
