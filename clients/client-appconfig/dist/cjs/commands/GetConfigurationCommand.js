"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Receive information about a configuration.</p>
 *          <important>
 *             <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter
 *             to identify the configuration version on your clients. If you don’t send
 *                <code>ClientConfigurationVersion</code> with each call to
 *                <code>GetConfiguration</code>, your clients receive the current configuration. You
 *             are charged each time your clients receive a configuration.</p>
 *             <p>To avoid excess charges, we recommend that you include the
 *                <code>ClientConfigurationVersion</code> value with every call to
 *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
 *             calls to <code>GetConfiguration</code> must pass this value by using the
 *                <code>ClientConfigurationVersion</code> parameter. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetConfigurationCommand extends smithy_client_1.Command {
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
    const commandName = "GetConfigurationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.Configuration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1GetConfigurationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1GetConfigurationCommand(output, context);
  }
}
exports.GetConfigurationCommand = GetConfigurationCommand;
//# sourceMappingURL=GetConfigurationCommand.js.map
