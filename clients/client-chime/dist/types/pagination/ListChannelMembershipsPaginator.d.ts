import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelMemberships(
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsCommandOutput>;
