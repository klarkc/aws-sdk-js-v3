"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSuspendUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class BatchSuspendUserCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchSuspendUserCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.BatchSuspendUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.BatchSuspendUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1BatchSuspendUserCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1BatchSuspendUserCommand(output, context);
  }
}
exports.BatchSuspendUserCommand = BatchSuspendUserCommand;
//# sourceMappingURL=BatchSuspendUserCommand.js.map
