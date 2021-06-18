import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelMembershipsForAppInstanceUser(
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsForAppInstanceUserCommandOutput>;
