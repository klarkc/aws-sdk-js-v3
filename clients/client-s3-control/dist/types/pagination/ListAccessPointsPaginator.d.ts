import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "../commands/ListAccessPointsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessPoints(config: S3ControlPaginationConfiguration, input: ListAccessPointsCommandInput, ...additionalArguments: any): Paginator<ListAccessPointsCommandOutput>;
