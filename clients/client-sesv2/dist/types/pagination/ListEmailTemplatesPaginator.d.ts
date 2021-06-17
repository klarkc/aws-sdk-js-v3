import { ListEmailTemplatesCommandInput, ListEmailTemplatesCommandOutput } from "../commands/ListEmailTemplatesCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEmailTemplates(config: SESv2PaginationConfiguration, input: ListEmailTemplatesCommandInput, ...additionalArguments: any): Paginator<ListEmailTemplatesCommandOutput>;
