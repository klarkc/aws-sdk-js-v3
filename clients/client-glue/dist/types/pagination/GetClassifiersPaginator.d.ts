import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "../commands/GetClassifiersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetClassifiers(config: GluePaginationConfiguration, input: GetClassifiersCommandInput, ...additionalArguments: any): Paginator<GetClassifiersCommandOutput>;
