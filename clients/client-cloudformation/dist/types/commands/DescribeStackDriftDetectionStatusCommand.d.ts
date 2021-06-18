import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackDriftDetectionStatusInput, DescribeStackDriftDetectionStatusOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeStackDriftDetectionStatusCommandInput extends DescribeStackDriftDetectionStatusInput {}
export interface DescribeStackDriftDetectionStatusCommandOutput
  extends DescribeStackDriftDetectionStatusOutput,
    __MetadataBearer {}
/**
 * <p>Returns information about a stack drift detection operation. A stack drift detection
 *          operation detects whether a stack's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted. For more information on stack and
 *          resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
 *             <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use
 *          to monitor the progress of the operation using
 *             <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has
 *          completed, use <a>DescribeStackResourceDrifts</a> to return drift information
 *          about the stack and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackDriftDetectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackDriftDetectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeStackDriftDetectionStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackDriftDetectionStatusCommand extends $Command<
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeStackDriftDetectionStatusCommandInput;
  constructor(input: DescribeStackDriftDetectionStatusCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackDriftDetectionStatusCommandInput, DescribeStackDriftDetectionStatusCommandOutput>;
  private serialize;
  private deserialize;
}
