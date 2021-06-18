import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchSuspendUserRequest, BatchSuspendUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchSuspendUserCommandInput extends BatchSuspendUserRequest {}
export interface BatchSuspendUserCommandOutput extends BatchSuspendUserResponse, __MetadataBearer {}
/**
 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
 *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your
 *                 Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 *
 *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
 *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
 *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
 *             You can use the <a>InviteUsers</a> action to do so.</p>
 *
 *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
 *             Amazon Chime and can no longer sign in. To remove the suspension from suspended
 *                 <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p>
 *
 *          <p>
 * To sign out users without suspending them, use the
 * <a>LogoutUser</a>
 * action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchSuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchSuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchSuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchSuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchSuspendUserCommand extends $Command<
  BatchSuspendUserCommandInput,
  BatchSuspendUserCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: BatchSuspendUserCommandInput;
  constructor(input: BatchSuspendUserCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput>;
  private serialize;
  private deserialize;
}
