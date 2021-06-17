import { ListAuthorizersCommandInput, ListAuthorizersCommandOutput } from "../commands/ListAuthorizersCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuthorizers(config: IoTPaginationConfiguration, input: ListAuthorizersCommandInput, ...additionalArguments: any): Paginator<ListAuthorizersCommandOutput>;
