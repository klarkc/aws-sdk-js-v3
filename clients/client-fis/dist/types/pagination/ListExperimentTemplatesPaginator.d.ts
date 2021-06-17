import { ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput } from "../commands/ListExperimentTemplatesCommand";
import { FisPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExperimentTemplates(config: FisPaginationConfiguration, input: ListExperimentTemplatesCommandInput, ...additionalArguments: any): Paginator<ListExperimentTemplatesCommandOutput>;
