import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchUnsuspendUserRequest, BatchUnsuspendUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchUnsuspendUserCommandInput extends BatchUnsuspendUserRequest {}
export interface BatchUnsuspendUserCommandOutput extends BatchUnsuspendUserResponse, __MetadataBearer {}
/**
 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
 *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
 *             accounts can be unsuspended using this action. For more information about different
 *             account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
 *                 <i>Amazon Chime Administration Guide</i>.</p>
 *
 *          <p>
 * Previously suspended users who are unsuspended using this action are returned to
 * <code>Registered</code>
 * status. Users who are not previously suspended are ignored.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUnsuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUnsuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUnsuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUnsuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchUnsuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchUnsuspendUserCommand extends $Command<
  BatchUnsuspendUserCommandInput,
  BatchUnsuspendUserCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: BatchUnsuspendUserCommandInput;
  constructor(input: BatchUnsuspendUserCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput>;
  private serialize;
  private deserialize;
}
