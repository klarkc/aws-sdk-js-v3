import { __extends } from "tslib";
import { CreateEnvironmentRequest, Environment } from "../models/models_0";
import {
  deserializeAws_restJson1CreateEnvironmentCommand,
  serializeAws_restJson1CreateEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateEnvironmentCommand = /** @class */ (function (_super) {
  __extends(CreateEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateEnvironmentCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "CreateEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Environment.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateEnvironmentCommand(input, context);
  };
  CreateEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateEnvironmentCommand(output, context);
  };
  return CreateEnvironmentCommand;
})($Command);
export { CreateEnvironmentCommand };
//# sourceMappingURL=CreateEnvironmentCommand.js.map
