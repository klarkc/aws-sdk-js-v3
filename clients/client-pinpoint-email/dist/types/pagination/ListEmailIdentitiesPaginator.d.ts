import { ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput } from "../commands/ListEmailIdentitiesCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEmailIdentities(config: PinpointEmailPaginationConfiguration, input: ListEmailIdentitiesCommandInput, ...additionalArguments: any): Paginator<ListEmailIdentitiesCommandOutput>;
