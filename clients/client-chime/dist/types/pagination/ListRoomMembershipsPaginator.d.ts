import {
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "../commands/ListRoomMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoomMemberships(
  config: ChimePaginationConfiguration,
  input: ListRoomMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoomMembershipsCommandOutput>;
