import { ListProvisioningTemplateVersionsCommandInput, ListProvisioningTemplateVersionsCommandOutput } from "../commands/ListProvisioningTemplateVersionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProvisioningTemplateVersions(config: IoTPaginationConfiguration, input: ListProvisioningTemplateVersionsCommandInput, ...additionalArguments: any): Paginator<ListProvisioningTemplateVersionsCommandOutput>;
