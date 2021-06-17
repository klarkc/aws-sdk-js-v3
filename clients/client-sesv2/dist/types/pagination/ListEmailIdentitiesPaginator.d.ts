import { ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput } from "../commands/ListEmailIdentitiesCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEmailIdentities(config: SESv2PaginationConfiguration, input: ListEmailIdentitiesCommandInput, ...additionalArguments: any): Paginator<ListEmailIdentitiesCommandOutput>;
