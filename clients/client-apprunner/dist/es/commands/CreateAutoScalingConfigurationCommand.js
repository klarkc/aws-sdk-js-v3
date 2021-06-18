import { __extends } from "tslib";
import { CreateAutoScalingConfigurationRequest, CreateAutoScalingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateAutoScalingConfigurationCommand,
  serializeAws_json1_0CreateAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource
 *       when you create App Runner services that require non-default auto scaling settings. You can share an
 *       auto scaling configuration across multiple services.</p>
 *          <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different
 *         <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling
 *       configuration or a specific revision.</p>
 *          <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is
 *       a higher minimal cost.</p>
 *          <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new CreateAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAutoScalingConfigurationCommand = /** @class */ (function (_super) {
  __extends(CreateAutoScalingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAutoScalingConfigurationCommand(input) {
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
  CreateAutoScalingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "CreateAutoScalingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAutoScalingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAutoScalingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAutoScalingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0CreateAutoScalingConfigurationCommand(input, context);
  };
  CreateAutoScalingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0CreateAutoScalingConfigurationCommand(output, context);
  };
  return CreateAutoScalingConfigurationCommand;
})($Command);
export { CreateAutoScalingConfigurationCommand };
//# sourceMappingURL=CreateAutoScalingConfigurationCommand.js.map
