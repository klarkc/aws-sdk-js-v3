"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterJobDefinitionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deregisters an AWS Batch job definition. Job definitions are permanently deleted after 180 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeregisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeregisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeregisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeregisterJobDefinitionCommand extends smithy_client_1.Command {
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
    const clientName = "BatchClient";
    const commandName = "DeregisterJobDefinitionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeregisterJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeregisterJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DeregisterJobDefinitionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DeregisterJobDefinitionCommand(output, context);
  }
}
exports.DeregisterJobDefinitionCommand = DeregisterJobDefinitionCommand;
//# sourceMappingURL=DeregisterJobDefinitionCommand.js.map
