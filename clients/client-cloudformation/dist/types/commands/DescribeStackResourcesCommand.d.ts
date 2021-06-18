import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourcesInput, DescribeStackResourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeStackResourcesCommandInput extends DescribeStackResourcesInput {}
export interface DescribeStackResourcesCommandOutput extends DescribeStackResourcesOutput, __MetadataBearer {}
/**
 * <p>Returns AWS resource descriptions for running and deleted stacks. If
 *             <code>StackName</code> is specified, all the associated resources that are part of the
 *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
 *          resources of the stack that the resource belongs to are returned.</p>
 *          <note>
 *             <p>Only the first 100 resources will be returned. If your stack has more resources
 *             than this, you should use <code>ListStackResources</code> instead.</p>
 *          </note>
 *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information
 *          for up to 90 days after the stack has been deleted.</p>
 *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>,
 *          but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
 *          returned result. For more information about resources, the <code>LogicalResourceId</code>
 *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User
 *          Guide</a>.</p>
 *          <note>
 *             <p>A <code>ValidationError</code> is returned if you specify both
 *                <code>StackName</code> and <code>PhysicalResourceId</code> in the same
 *             request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackResourcesCommand extends $Command<
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeStackResourcesCommandInput;
  constructor(input: DescribeStackResourcesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackResourcesCommandInput, DescribeStackResourcesCommandOutput>;
  private serialize;
  private deserialize;
}
