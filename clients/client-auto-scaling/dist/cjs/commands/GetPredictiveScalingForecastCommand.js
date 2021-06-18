"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPredictiveScalingForecastCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetPredictiveScalingForecastCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "GetPredictiveScalingForecastCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetPredictiveScalingForecastType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetPredictiveScalingForecastAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryGetPredictiveScalingForecastCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryGetPredictiveScalingForecastCommand(output, context);
  }
}
exports.GetPredictiveScalingForecastCommand = GetPredictiveScalingForecastCommand;
//# sourceMappingURL=GetPredictiveScalingForecastCommand.js.map
