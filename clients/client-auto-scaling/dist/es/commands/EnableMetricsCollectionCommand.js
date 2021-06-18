import { __extends } from "tslib";
import { EnableMetricsCollectionQuery } from "../models/models_0";
import {
  deserializeAws_queryEnableMetricsCollectionCommand,
  serializeAws_queryEnableMetricsCollectionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new EnableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link EnableMetricsCollectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableMetricsCollectionCommand = /** @class */ (function (_super) {
  __extends(EnableMetricsCollectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function EnableMetricsCollectionCommand(input) {
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
  EnableMetricsCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "EnableMetricsCollectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: EnableMetricsCollectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  EnableMetricsCollectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryEnableMetricsCollectionCommand(input, context);
  };
  EnableMetricsCollectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryEnableMetricsCollectionCommand(output, context);
  };
  return EnableMetricsCollectionCommand;
})($Command);
export { EnableMetricsCollectionCommand };
//# sourceMappingURL=EnableMetricsCollectionCommand.js.map
