import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ContinueUpdateRollbackCommandInput extends ContinueUpdateRollbackInput {}
export interface ContinueUpdateRollbackCommandOutput extends ContinueUpdateRollbackOutput, __MetadataBearer {}
/**
 * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state,
 *          continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on
 *          the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can
 *          return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and
 *          then try to update the stack again.</p>
 *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS
 *          CloudFormation cannot roll back all changes after a failed stack update. For example, you
 *          might have a stack that is rolling back to an old database instance that was deleted
 *          outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was
 *          deleted, it assumes that the database instance still exists and attempts to roll back to
 *          it, causing the update rollback to fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ContinueUpdateRollbackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ContinueUpdateRollbackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ContinueUpdateRollbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContinueUpdateRollbackCommandInput} for command's `input` shape.
 * @see {@link ContinueUpdateRollbackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ContinueUpdateRollbackCommand extends $Command<
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ContinueUpdateRollbackCommandInput;
  constructor(input: ContinueUpdateRollbackCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ContinueUpdateRollbackCommandInput, ContinueUpdateRollbackCommandOutput>;
  private serialize;
  private deserialize;
}
