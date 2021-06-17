import { DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput } from "../commands/DescribeScheduledActionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeScheduledActions(config: RedshiftPaginationConfiguration, input: DescribeScheduledActionsCommandInput, ...additionalArguments: any): Paginator<DescribeScheduledActionsCommandOutput>;
