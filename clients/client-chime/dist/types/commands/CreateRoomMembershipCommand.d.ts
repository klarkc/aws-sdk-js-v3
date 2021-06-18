import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateRoomMembershipRequest, CreateRoomMembershipResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateRoomMembershipCommandInput extends CreateRoomMembershipRequest {}
export interface CreateRoomMembershipCommandOutput extends CreateRoomMembershipResponse, __MetadataBearer {}
/**
 * <p>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRoomMembershipCommand extends $Command<
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: CreateRoomMembershipCommandInput;
  constructor(input: CreateRoomMembershipCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRoomMembershipCommandInput, CreateRoomMembershipCommandOutput>;
  private serialize;
  private deserialize;
}
