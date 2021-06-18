import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { GetPredictiveScalingForecastAnswer, GetPredictiveScalingForecastType } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetPredictiveScalingForecastCommandInput extends GetPredictiveScalingForecastType {}
export interface GetPredictiveScalingForecastCommandOutput
  extends GetPredictiveScalingForecastAnswer,
    __MetadataBearer {}
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
export declare class GetPredictiveScalingForecastCommand extends $Command<
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
  AutoScalingClientResolvedConfig
> {
  readonly input: GetPredictiveScalingForecastCommandInput;
  constructor(input: GetPredictiveScalingForecastCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPredictiveScalingForecastCommandInput, GetPredictiveScalingForecastCommandOutput>;
  private serialize;
  private deserialize;
}
