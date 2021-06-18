"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBackendAPICommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new DeleteBackendAPICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendAPICommandInput} for command's `input` shape.
 * @see {@link DeleteBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteBackendAPICommand extends smithy_client_1.Command {
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
    const clientName = "AmplifyBackendClient";
    const commandName = "DeleteBackendAPICommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteBackendAPIResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DeleteBackendAPICommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DeleteBackendAPICommand(output, context);
  }
}
exports.DeleteBackendAPICommand = DeleteBackendAPICommand;
//# sourceMappingURL=DeleteBackendAPICommand.js.map
