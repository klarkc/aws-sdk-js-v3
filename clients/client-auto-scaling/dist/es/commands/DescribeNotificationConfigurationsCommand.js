import { __extends } from "tslib";
import { DescribeNotificationConfigurationsAnswer, DescribeNotificationConfigurationsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeNotificationConfigurationsCommand,
  serializeAws_queryDescribeNotificationConfigurationsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the Amazon SNS notifications that are configured for one or more
 *             Auto Scaling groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeNotificationConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeNotificationConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotificationConfigurationsCommand = /** @class */ (function (_super) {
  __extends(DescribeNotificationConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeNotificationConfigurationsCommand(input) {
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
  DescribeNotificationConfigurationsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeNotificationConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeNotificationConfigurationsType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotificationConfigurationsAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeNotificationConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeNotificationConfigurationsCommand(input, context);
  };
  DescribeNotificationConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeNotificationConfigurationsCommand(output, context);
  };
  return DescribeNotificationConfigurationsCommand;
})($Command);
export { DescribeNotificationConfigurationsCommand };
//# sourceMappingURL=DescribeNotificationConfigurationsCommand.js.map
