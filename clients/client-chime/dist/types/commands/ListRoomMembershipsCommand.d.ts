import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListRoomMembershipsRequest, ListRoomMembershipsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListRoomMembershipsCommandInput extends ListRoomMembershipsRequest {}
export interface ListRoomMembershipsCommandOutput extends ListRoomMembershipsResponse, __MetadataBearer {}
/**
 * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
 *             such as the members' IDs, email addresses, and names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomMembershipsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomMembershipsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListRoomMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoomMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListRoomMembershipsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoomMembershipsCommand extends $Command<
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListRoomMembershipsCommandInput;
  constructor(input: ListRoomMembershipsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoomMembershipsCommandInput, ListRoomMembershipsCommandOutput>;
  private serialize;
  private deserialize;
}
