import { ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput } from "../commands/ListSolutionVersionsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSolutionVersions(config: PersonalizePaginationConfiguration, input: ListSolutionVersionsCommandInput, ...additionalArguments: any): Paginator<ListSolutionVersionsCommandOutput>;
