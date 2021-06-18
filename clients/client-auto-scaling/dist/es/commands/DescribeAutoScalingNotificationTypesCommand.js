import { __extends } from "tslib";
import { DescribeAutoScalingNotificationTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingNotificationTypesCommand,
  serializeAws_queryDescribeAutoScalingNotificationTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAutoScalingNotificationTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingNotificationTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingNotificationTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAutoScalingNotificationTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeAutoScalingNotificationTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAutoScalingNotificationTypesCommand(input) {
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
  DescribeAutoScalingNotificationTypesCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeAutoScalingNotificationTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: DescribeAutoScalingNotificationTypesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAutoScalingNotificationTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeAutoScalingNotificationTypesCommand(input, context);
  };
  DescribeAutoScalingNotificationTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommand(output, context);
  };
  return DescribeAutoScalingNotificationTypesCommand;
})($Command);
export { DescribeAutoScalingNotificationTypesCommand };
//# sourceMappingURL=DescribeAutoScalingNotificationTypesCommand.js.map
