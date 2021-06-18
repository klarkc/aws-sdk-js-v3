import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelsModeratedByAppInstanceUser(
  config: ChimePaginationConfiguration,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsModeratedByAppInstanceUserCommandOutput>;
