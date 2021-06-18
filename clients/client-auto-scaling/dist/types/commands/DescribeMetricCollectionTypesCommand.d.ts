import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeMetricCollectionTypesAnswer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeMetricCollectionTypesCommandInput {}
export interface DescribeMetricCollectionTypesCommandOutput
  extends DescribeMetricCollectionTypesAnswer,
    __MetadataBearer {}
/**
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
 *             explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeMetricCollectionTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeMetricCollectionTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMetricCollectionTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCollectionTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMetricCollectionTypesCommand extends $Command<
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  readonly input: DescribeMetricCollectionTypesCommandInput;
  constructor(input: DescribeMetricCollectionTypesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput>;
  private serialize;
  private deserialize;
}
