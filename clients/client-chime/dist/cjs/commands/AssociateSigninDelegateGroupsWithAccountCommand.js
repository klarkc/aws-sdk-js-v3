"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateSigninDelegateGroupsWithAccountCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociateSigninDelegateGroupsWithAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateSigninDelegateGroupsWithAccountCommand extends smithy_client_1.Command {
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
    const commandName = "AssociateSigninDelegateGroupsWithAccountCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.AssociateSigninDelegateGroupsWithAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.AssociateSigninDelegateGroupsWithAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(output, context);
  }
}
exports.AssociateSigninDelegateGroupsWithAccountCommand = AssociateSigninDelegateGroupsWithAccountCommand;
//# sourceMappingURL=AssociateSigninDelegateGroupsWithAccountCommand.js.map
