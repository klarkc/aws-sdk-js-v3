import { __extends } from "tslib";
import { GetPredictiveScalingForecastAnswer, GetPredictiveScalingForecastType } from "../models/models_0";
import {
  deserializeAws_queryGetPredictiveScalingForecastCommand,
  serializeAws_queryGetPredictiveScalingForecastCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the forecast data for a predictive scaling policy.</p>
 *         <p>Load forecasts are predictions of the hourly load values using historical load data
 *             from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as
 *             predicted values for the minimum capacity that is needed on an hourly basis, based on
 *             the hourly load forecast.</p>
 *         <p>A minimum of 24 hours of data is required to create the initial forecasts. However,
 *             having a full 14 days of historical data results in more accurate forecasts.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive
 *                 scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, GetPredictiveScalingForecastCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, GetPredictiveScalingForecastCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new GetPredictiveScalingForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPredictiveScalingForecastCommandInput} for command's `input` shape.
 * @see {@link GetPredictiveScalingForecastCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPredictiveScalingForecastCommand = /** @class */ (function (_super) {
  __extends(GetPredictiveScalingForecastCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetPredictiveScalingForecastCommand(input) {
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
  GetPredictiveScalingForecastCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "GetPredictiveScalingForecastCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetPredictiveScalingForecastType.filterSensitiveLog,
      outputFilterSensitiveLog: GetPredictiveScalingForecastAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetPredictiveScalingForecastCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryGetPredictiveScalingForecastCommand(input, context);
  };
  GetPredictiveScalingForecastCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryGetPredictiveScalingForecastCommand(output, context);
  };
  return GetPredictiveScalingForecastCommand;
})($Command);
export { GetPredictiveScalingForecastCommand };
//# sourceMappingURL=GetPredictiveScalingForecastCommand.js.map
