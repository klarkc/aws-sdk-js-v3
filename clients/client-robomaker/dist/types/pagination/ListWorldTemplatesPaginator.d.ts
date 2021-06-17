import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "../commands/ListWorldTemplatesCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorldTemplates(config: RoboMakerPaginationConfiguration, input: ListWorldTemplatesCommandInput, ...additionalArguments: any): Paginator<ListWorldTemplatesCommandOutput>;
