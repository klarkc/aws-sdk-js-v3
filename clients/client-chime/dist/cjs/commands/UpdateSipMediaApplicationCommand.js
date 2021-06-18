"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSipMediaApplicationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the details of the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateSipMediaApplicationCommand extends smithy_client_1.Command {
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
    const commandName = "UpdateSipMediaApplicationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.UpdateSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.UpdateSipMediaApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1UpdateSipMediaApplicationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1UpdateSipMediaApplicationCommand(output, context);
  }
}
exports.UpdateSipMediaApplicationCommand = UpdateSipMediaApplicationCommand;
//# sourceMappingURL=UpdateSipMediaApplicationCommand.js.map
