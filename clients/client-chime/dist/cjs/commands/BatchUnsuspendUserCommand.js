"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUnsuspendUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class BatchUnsuspendUserCommand extends smithy_client_1.Command {
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
    const commandName = "BatchUnsuspendUserCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.BatchUnsuspendUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.BatchUnsuspendUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1BatchUnsuspendUserCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1BatchUnsuspendUserCommand(output, context);
  }
}
exports.BatchUnsuspendUserCommand = BatchUnsuspendUserCommand;
//# sourceMappingURL=BatchUnsuspendUserCommand.js.map
