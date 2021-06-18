import {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSipMediaApplications(
  config: ChimePaginationConfiguration,
  input: ListSipMediaApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSipMediaApplicationsCommandOutput>;
