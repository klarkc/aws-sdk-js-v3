import { __extends } from "tslib";
import { LaunchConfigurationNamesType, LaunchConfigurationsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeLaunchConfigurationsCommand,
  serializeAws_queryDescribeLaunchConfigurationsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the launch configurations in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLaunchConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLaunchConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLaunchConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLaunchConfigurationsCommand = /** @class */ (function (_super) {
  __extends(DescribeLaunchConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeLaunchConfigurationsCommand(input) {
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
  DescribeLaunchConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeLaunchConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: LaunchConfigurationNamesType.filterSensitiveLog,
      outputFilterSensitiveLog: LaunchConfigurationsType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLaunchConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeLaunchConfigurationsCommand(input, context);
  };
  DescribeLaunchConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeLaunchConfigurationsCommand(output, context);
  };
  return DescribeLaunchConfigurationsCommand;
})($Command);
export { DescribeLaunchConfigurationsCommand };
//# sourceMappingURL=DescribeLaunchConfigurationsCommand.js.map
