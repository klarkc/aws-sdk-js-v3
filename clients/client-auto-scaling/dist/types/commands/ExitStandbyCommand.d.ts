import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExitStandbyCommandInput extends ExitStandbyQuery {}
export interface ExitStandbyCommandOutput extends ExitStandbyAnswer, __MetadataBearer {}
/**
 * <p>Moves the specified instances out of the standby state.</p>
 *         <p>After you put the instances back in service, the desired capacity is
 *             incremented.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExitStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExitStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExitStandbyCommandInput} for command's `input` shape.
 * @see {@link ExitStandbyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExitStandbyCommand extends $Command<
  ExitStandbyCommandInput,
  ExitStandbyCommandOutput,
  AutoScalingClientResolvedConfig
> {
  readonly input: ExitStandbyCommandInput;
  constructor(input: ExitStandbyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExitStandbyCommandInput, ExitStandbyCommandOutput>;
  private serialize;
  private deserialize;
}
