import { GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTriggers(config: GluePaginationConfiguration, input: GetTriggersCommandInput, ...additionalArguments: any): Paginator<GetTriggersCommandOutput>;
