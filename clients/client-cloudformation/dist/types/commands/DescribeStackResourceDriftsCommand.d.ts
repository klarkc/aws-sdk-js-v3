import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeStackResourceDriftsCommandInput extends DescribeStackResourceDriftsInput {}
export interface DescribeStackResourceDriftsCommandOutput extends DescribeStackResourceDriftsOutput, __MetadataBearer {}
/**
 * <p>Returns drift information for the resources that have been checked for drift in the
 *          specified stack. This includes actual and expected configuration values for resources where
 *          AWS CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
 *          resource that has been checked for drift. Resources that have not yet been checked for
 *          drift are not included. Resources that do not currently support drift detection are not
 *          checked, and so not included. For a list of resources that support drift detection, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources, or <a>DetectStackDrift</a> to detect drift on all supported resources
 *          for a given stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackResourceDriftsCommand extends $Command<
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeStackResourceDriftsCommandInput;
  constructor(input: DescribeStackResourceDriftsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput>;
  private serialize;
  private deserialize;
}
