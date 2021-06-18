"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokeInvitationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Revokes an invitation and invalidates the enrollment URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RevokeInvitationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RevokeInvitationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RevokeInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeInvitationCommandInput} for command's `input` shape.
 * @see {@link RevokeInvitationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RevokeInvitationCommand extends smithy_client_1.Command {
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
    const clientName = "AlexaForBusinessClient";
    const commandName = "RevokeInvitationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.RevokeInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.RevokeInvitationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1RevokeInvitationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1RevokeInvitationCommand(output, context);
  }
}
exports.RevokeInvitationCommand = RevokeInvitationCommand;
//# sourceMappingURL=RevokeInvitationCommand.js.map
