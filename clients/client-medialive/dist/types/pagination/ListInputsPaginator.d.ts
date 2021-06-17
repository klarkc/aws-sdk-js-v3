import { ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInputs(config: MediaLivePaginationConfiguration, input: ListInputsCommandInput, ...additionalArguments: any): Paginator<ListInputsCommandOutput>;
