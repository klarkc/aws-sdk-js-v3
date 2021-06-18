import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeLifecycleHookTypesCommandInput {}
export interface DescribeLifecycleHookTypesCommandOutput extends DescribeLifecycleHookTypesAnswer, __MetadataBearer {}
/**
 * <p>Describes the available types of lifecycle hooks.</p>
 *         <p>The following hook types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHookTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHookTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHookTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHookTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLifecycleHookTypesCommand extends $Command<
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  readonly input: DescribeLifecycleHookTypesCommandInput;
  constructor(input: DescribeLifecycleHookTypesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput>;
  private serialize;
  private deserialize;
}
