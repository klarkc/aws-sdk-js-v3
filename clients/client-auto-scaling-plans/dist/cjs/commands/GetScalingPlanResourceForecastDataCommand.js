"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScalingPlanResourceForecastDataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetScalingPlanResourceForecastDataCommand extends smithy_client_1.Command {
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
    const clientName = "AutoScalingPlansClient";
    const commandName = "GetScalingPlanResourceForecastDataCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetScalingPlanResourceForecastDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetScalingPlanResourceForecastDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1GetScalingPlanResourceForecastDataCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand(output, context);
  }
}
exports.GetScalingPlanResourceForecastDataCommand = GetScalingPlanResourceForecastDataCommand;
//# sourceMappingURL=GetScalingPlanResourceForecastDataCommand.js.map
