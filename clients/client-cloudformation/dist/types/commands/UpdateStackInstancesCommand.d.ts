import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackInstancesInput, UpdateStackInstancesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateStackInstancesCommandInput extends UpdateStackInstancesInput {}
export interface UpdateStackInstancesCommandOutput extends UpdateStackInstancesOutput, __MetadataBearer {}
/**
 * <p>Updates the parameter values for stack instances for the specified accounts, within
 *          the specified Regions. A stack instance refers to a stack in a specific account and Region. </p>
 *          <p>You can only update stack instances in Regions and accounts where they already exist;
 *          to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p>
 *          <p>During stack set updates, any parameters overridden for a stack instance are not
 *          updated, but retain their overridden value.</p>
 *          <p>You can only update the parameter <i>values</i> that are specified in
 *          the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a
 *          template, before you can override the parameter value specified in the stack set you must
 *          first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and
 *          parameter value specified in the stack set. Once a stack instance has been updated with the
 *          new parameter, you can then override the parameter value using
 *             <code>UpdateStackInstances</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackInstancesCommandInput} for command's `input` shape.
 * @see {@link UpdateStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStackInstancesCommand extends $Command<
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: UpdateStackInstancesCommandInput;
  constructor(input: UpdateStackInstancesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStackInstancesCommandInput, UpdateStackInstancesCommandOutput>;
  private serialize;
  private deserialize;
}
