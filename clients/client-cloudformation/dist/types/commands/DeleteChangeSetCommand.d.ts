import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteChangeSetInput, DeleteChangeSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteChangeSetCommandInput extends DeleteChangeSetInput {}
export interface DeleteChangeSetCommandOutput extends DeleteChangeSetOutput, __MetadataBearer {}
/**
 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes
 *          the wrong change set.</p>
 *          <p>If the call successfully completes, AWS CloudFormation successfully deleted the
 *          change set.</p>
 *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of
 *          the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and
 *           will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteChangeSetCommand extends $Command<
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DeleteChangeSetCommandInput;
  constructor(input: DeleteChangeSetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput>;
  private serialize;
  private deserialize;
}
