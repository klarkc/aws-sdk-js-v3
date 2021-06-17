import { ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput } from "../commands/ListAccessPointsForObjectLambdaCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessPointsForObjectLambda(config: S3ControlPaginationConfiguration, input: ListAccessPointsForObjectLambdaCommandInput, ...additionalArguments: any): Paginator<ListAccessPointsForObjectLambdaCommandOutput>;
