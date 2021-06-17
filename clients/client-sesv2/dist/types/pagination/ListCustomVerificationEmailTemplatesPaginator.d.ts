import { ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput } from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomVerificationEmailTemplates(config: SESv2PaginationConfiguration, input: ListCustomVerificationEmailTemplatesCommandInput, ...additionalArguments: any): Paginator<ListCustomVerificationEmailTemplatesCommandOutput>;
