import { __extends } from "tslib";
import { DescribeAutoScalingConfigurationRequest, DescribeAutoScalingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeAutoScalingConfigurationCommand,
  serializeAws_json1_0DescribeAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Return a full description of an AWS App Runner automatic scaling configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutoScalingConfigurationCommand = /** @class */ (function (_super) {
  __extends(DescribeAutoScalingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAutoScalingConfigurationCommand(input) {
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
  DescribeAutoScalingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DescribeAutoScalingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAutoScalingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAutoScalingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAutoScalingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DescribeAutoScalingConfigurationCommand(input, context);
  };
  DescribeAutoScalingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommand(output, context);
  };
  return DescribeAutoScalingConfigurationCommand;
})($Command);
export { DescribeAutoScalingConfigurationCommand };
//# sourceMappingURL=DescribeAutoScalingConfigurationCommand.js.map
