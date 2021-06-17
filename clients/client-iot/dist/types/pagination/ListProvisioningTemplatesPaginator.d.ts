import { ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput } from "../commands/ListProvisioningTemplatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProvisioningTemplates(config: IoTPaginationConfiguration, input: ListProvisioningTemplatesCommandInput, ...additionalArguments: any): Paginator<ListProvisioningTemplatesCommandOutput>;
