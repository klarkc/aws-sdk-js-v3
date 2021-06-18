"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTypeDefaultVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SetTypeDefaultVersionCommand extends smithy_client_1.Command {
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
    const clientName = "CloudFormationClient";
    const commandName = "SetTypeDefaultVersionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.SetTypeDefaultVersionInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.SetTypeDefaultVersionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_querySetTypeDefaultVersionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_querySetTypeDefaultVersionCommand(output, context);
  }
}
exports.SetTypeDefaultVersionCommand = SetTypeDefaultVersionCommand;
//# sourceMappingURL=SetTypeDefaultVersionCommand.js.map
