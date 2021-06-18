"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegenerateSecurityTokenCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Regenerates the security token for a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RegenerateSecurityTokenCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RegenerateSecurityTokenCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RegenerateSecurityTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegenerateSecurityTokenCommandInput} for command's `input` shape.
 * @see {@link RegenerateSecurityTokenCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RegenerateSecurityTokenCommand extends smithy_client_1.Command {
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
    const commandName = "RegenerateSecurityTokenCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.RegenerateSecurityTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.RegenerateSecurityTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1RegenerateSecurityTokenCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1RegenerateSecurityTokenCommand(output, context);
  }
}
exports.RegenerateSecurityTokenCommand = RegenerateSecurityTokenCommand;
//# sourceMappingURL=RegenerateSecurityTokenCommand.js.map
