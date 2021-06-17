import { ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput } from "../commands/ListApplicationRevisionsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplicationRevisions(config: CodeDeployPaginationConfiguration, input: ListApplicationRevisionsCommandInput, ...additionalArguments: any): Paginator<ListApplicationRevisionsCommandOutput>;
