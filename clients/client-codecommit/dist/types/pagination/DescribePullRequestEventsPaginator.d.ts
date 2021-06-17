import { DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput } from "../commands/DescribePullRequestEventsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePullRequestEvents(config: CodeCommitPaginationConfiguration, input: DescribePullRequestEventsCommandInput, ...additionalArguments: any): Paginator<DescribePullRequestEventsCommandOutput>;
