import {
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "../commands/ListBusinessReportSchedulesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBusinessReportSchedules(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListBusinessReportSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListBusinessReportSchedulesCommandOutput>;
