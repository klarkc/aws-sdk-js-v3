import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateTerminationProtectionInput, UpdateTerminationProtectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateTerminationProtectionCommandInput extends UpdateTerminationProtectionInput {}
export interface UpdateTerminationProtectionCommandOutput extends UpdateTerminationProtectionOutput, __MetadataBearer {}
/**
 * <p>Updates termination protection for the specified stack. If a user attempts to delete
 *          a stack with termination protection enabled, the operation fails and the stack remains
 *          unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a
 *             Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 *          <p> For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
 *             stacks</a>, termination protection is set on the root stack and cannot be changed
 *          directly on the nested stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateTerminationProtectionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateTerminationProtectionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateTerminationProtectionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTerminationProtectionCommand extends $Command<
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: UpdateTerminationProtectionCommandInput;
  constructor(input: UpdateTerminationProtectionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTerminationProtectionCommandInput, UpdateTerminationProtectionCommandOutput>;
  private serialize;
  private deserialize;
}
