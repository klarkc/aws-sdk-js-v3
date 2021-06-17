import { ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput } from "../commands/ListAccountSettingsCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountSettings(config: ECSPaginationConfiguration, input: ListAccountSettingsCommandInput, ...additionalArguments: any): Paginator<ListAccountSettingsCommandOutput>;
