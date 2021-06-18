"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
 *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
 *             to dodo.</p>
 *
 *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
 *             claimed domains for your Amazon Chime account before deletion. As soon as you release
 *             the domain, all users under that account are suspended.</p>
 *
 *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
 *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
 *             Support.</p>
 *
 *          <p>After 90 days, deleted accounts are permanently removed from your
 * <code>Disabled</code> accounts list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteAccountCommand extends smithy_client_1.Command {
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
    const commandName = "DeleteAccountCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DeleteAccountCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DeleteAccountCommand(output, context);
  }
}
exports.DeleteAccountCommand = DeleteAccountCommand;
//# sourceMappingURL=DeleteAccountCommand.js.map
