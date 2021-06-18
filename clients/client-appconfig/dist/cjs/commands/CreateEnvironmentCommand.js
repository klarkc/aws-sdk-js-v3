"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnvironmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>For each application, you define one or more environments. An environment is a logical
 *          deployment group of AppConfig targets, such as applications in a <code>Beta</code> or
 *             <code>Production</code> environment. You can also define environments for application
 *          subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code>
 *          components for your application. You can configure Amazon CloudWatch alarms for each environment.
 *          The system monitors alarms during a configuration deployment. If an alarm is triggered, the
 *          system rolls back the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateEnvironmentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateEnvironmentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEnvironmentCommand extends smithy_client_1.Command {
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
    const clientName = "AppConfigClient";
    const commandName = "CreateEnvironmentCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.Environment.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateEnvironmentCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateEnvironmentCommand(output, context);
  }
}
exports.CreateEnvironmentCommand = CreateEnvironmentCommand;
//# sourceMappingURL=CreateEnvironmentCommand.js.map
