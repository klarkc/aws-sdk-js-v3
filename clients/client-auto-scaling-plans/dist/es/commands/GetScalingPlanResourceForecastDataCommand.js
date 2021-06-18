import { __extends } from "tslib";
import {
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
  serializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the forecast data for a scalable resource.</p>
 *          <p>Capacity forecasts are represented as predicted values, or data points, that are
 *          calculated using historical data points from a specified CloudWatch load metric. Data points are
 *          available for up to 56 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new GetScalingPlanResourceForecastDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetScalingPlanResourceForecastDataCommandInput} for command's `input` shape.
 * @see {@link GetScalingPlanResourceForecastDataCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetScalingPlanResourceForecastDataCommand = /** @class */ (function (_super) {
  __extends(GetScalingPlanResourceForecastDataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetScalingPlanResourceForecastDataCommand(input) {
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
  GetScalingPlanResourceForecastDataCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "GetScalingPlanResourceForecastDataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetScalingPlanResourceForecastDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetScalingPlanResourceForecastDataResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetScalingPlanResourceForecastDataCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetScalingPlanResourceForecastDataCommand(input, context);
  };
  GetScalingPlanResourceForecastDataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand(output, context);
  };
  return GetScalingPlanResourceForecastDataCommand;
})($Command);
export { GetScalingPlanResourceForecastDataCommand };
//# sourceMappingURL=GetScalingPlanResourceForecastDataCommand.js.map
