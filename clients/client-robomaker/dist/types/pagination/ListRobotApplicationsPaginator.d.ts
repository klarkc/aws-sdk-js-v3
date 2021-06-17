import { ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput } from "../commands/ListRobotApplicationsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRobotApplications(config: RoboMakerPaginationConfiguration, input: ListRobotApplicationsCommandInput, ...additionalArguments: any): Paginator<ListRobotApplicationsCommandOutput>;
