import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchCreateRoomMembershipRequest, BatchCreateRoomMembershipResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchCreateRoomMembershipCommandInput extends BatchCreateRoomMembershipRequest {}
export interface BatchCreateRoomMembershipCommandOutput extends BatchCreateRoomMembershipResponse, __MetadataBearer {}
/**
 * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCreateRoomMembershipCommand extends $Command<
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: BatchCreateRoomMembershipCommandInput;
  constructor(input: BatchCreateRoomMembershipCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCreateRoomMembershipCommandInput, BatchCreateRoomMembershipCommandOutput>;
  private serialize;
  private deserialize;
}
