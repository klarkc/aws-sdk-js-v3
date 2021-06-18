import { __extends } from "tslib";
import { PutNotificationConfigurationType } from "../models/models_0";
import {
  deserializeAws_queryPutNotificationConfigurationCommand,
  serializeAws_queryPutNotificationConfigurationCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures an Auto Scaling group to send notifications when specified events take place.
 *             Subscribers to the specified topic can have messages delivered to an endpoint such as a
 *             web server or an email address.</p>
 *         <p>This configuration overwrites any existing configuration.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS
 *                 notifications when your Auto Scaling group scales</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutNotificationConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutNotificationConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutNotificationConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutNotificationConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutNotificationConfigurationCommand(input) {
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
  PutNotificationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "PutNotificationConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutNotificationConfigurationType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutNotificationConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryPutNotificationConfigurationCommand(input, context);
  };
  PutNotificationConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryPutNotificationConfigurationCommand(output, context);
  };
  return PutNotificationConfigurationCommand;
})($Command);
export { PutNotificationConfigurationCommand };
//# sourceMappingURL=PutNotificationConfigurationCommand.js.map
