import { GetDifferencesCommandInput, GetDifferencesCommandOutput } from "../commands/GetDifferencesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDifferences(config: CodeCommitPaginationConfiguration, input: GetDifferencesCommandInput, ...additionalArguments: any): Paginator<GetDifferencesCommandOutput>;
