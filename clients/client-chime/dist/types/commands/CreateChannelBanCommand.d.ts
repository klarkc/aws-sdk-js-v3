import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateChannelBanRequest, CreateChannelBanResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateChannelBanCommandInput extends CreateChannelBanRequest {}
export interface CreateChannelBanCommandOutput extends CreateChannelBanResponse, __MetadataBearer {}
/**
 * <p>Permanently bans a member from a channel. Moderators can't add banned members to a channel.
 *             To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
 *                 <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
 *             channels.</p>
 *          <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateChannelBanCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelBanCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateChannelBanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelBanCommandInput} for command's `input` shape.
 * @see {@link CreateChannelBanCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateChannelBanCommand extends $Command<
  CreateChannelBanCommandInput,
  CreateChannelBanCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: CreateChannelBanCommandInput;
  constructor(input: CreateChannelBanCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelBanCommandInput, CreateChannelBanCommandOutput>;
  private serialize;
  private deserialize;
}
