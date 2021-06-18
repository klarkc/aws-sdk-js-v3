import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateRoomMembershipCommandInput extends UpdateRoomMembershipRequest {}
export interface UpdateRoomMembershipCommandOutput extends UpdateRoomMembershipResponse, __MetadataBearer {}
/**
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
 *             Enterprise account. The member role designates whether the member is a chat room
 *             administrator or a general chat room member. The member role can be updated only for
 *             user IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoomMembershipCommand extends $Command<
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: UpdateRoomMembershipCommandInput;
  constructor(input: UpdateRoomMembershipCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRoomMembershipCommandInput, UpdateRoomMembershipCommandOutput>;
  private serialize;
  private deserialize;
}
