import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteChannelMembershipRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteChannelMembershipCommandInput extends DeleteChannelMembershipRequest {}
export interface DeleteChannelMembershipCommandOutput extends __MetadataBearer {}
/**
 * <p>Removes a member from a channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteChannelMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteChannelMembershipCommand extends $Command<
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: DeleteChannelMembershipCommandInput;
  constructor(input: DeleteChannelMembershipCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteChannelMembershipCommandInput, DeleteChannelMembershipCommandOutput>;
  private serialize;
  private deserialize;
}
