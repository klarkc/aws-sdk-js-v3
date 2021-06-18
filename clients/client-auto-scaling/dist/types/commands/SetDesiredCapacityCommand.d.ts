import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetDesiredCapacityType } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface SetDesiredCapacityCommandInput extends SetDesiredCapacityType {}
export interface SetDesiredCapacityCommandOutput extends __MetadataBearer {}
/**
 * <p>Sets the size of the specified Auto Scaling group.</p>
 *         <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value
 *             that is lower than the current size of the group, the Auto Scaling group uses its termination
 *             policy to determine which instances to terminate. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetDesiredCapacityCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SetDesiredCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDesiredCapacityCommandInput} for command's `input` shape.
 * @see {@link SetDesiredCapacityCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetDesiredCapacityCommand extends $Command<
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput,
  AutoScalingClientResolvedConfig
> {
  readonly input: SetDesiredCapacityCommandInput;
  constructor(input: SetDesiredCapacityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput>;
  private serialize;
  private deserialize;
}
