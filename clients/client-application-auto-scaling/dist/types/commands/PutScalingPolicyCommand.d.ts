import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { PutScalingPolicyRequest, PutScalingPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutScalingPolicyCommandInput extends PutScalingPolicyRequest {}
export interface PutScalingPolicyCommandOutput extends PutScalingPolicyResponse, __MetadataBearer {}
/**
 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p>
 *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
 *          dimension. A scaling policy applies to the scalable target identified by those three
 *          attributes. You cannot create a scaling policy until you have registered the resource as a
 *          scalable target.</p>
 *          <p>Multiple scaling policies can be in force at the same time for the same scalable target.
 *          You can have one or more target tracking scaling policies, one or more step scaling
 *          policies, or both. However, there is a chance that multiple policies could conflict,
 *          instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives
 *          precedence to the policy that provides the largest capacity for both scale out and scale
 *          in. For example, if one policy increases capacity by 3, another policy increases capacity
 *          by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest
 *          calculated capacity (200% of 10 = 20) and scales out to 30. </p>
 *          <p>We recommend caution, however, when using target tracking scaling policies with step
 *          scaling policies because conflicts between these policies can cause undesirable behavior.
 *          For example, if the step scaling policy initiates a scale-in activity before the target
 *          tracking policy is ready to scale in, the scale-in activity will not be blocked. After the
 *          scale-in activity completes, the target tracking policy could instruct the scalable target
 *          to scale out again. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>If a scalable target is deregistered, the scalable target is no longer available to
 *             execute scaling policies. Any scaling policies that were specified for the scalable
 *             target are deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, PutScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, PutScalingPolicyCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  readonly input: PutScalingPolicyCommandInput;
  constructor(input: PutScalingPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
