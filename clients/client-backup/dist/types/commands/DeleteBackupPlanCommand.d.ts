import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DeleteBackupPlanInput, DeleteBackupPlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteBackupPlanCommandInput extends DeleteBackupPlanInput {}
export interface DeleteBackupPlanCommandOutput extends DeleteBackupPlanOutput, __MetadataBearer {}
/**
 * <p>Deletes a backup plan. A backup plan can only be deleted after all associated selections
 *          of resources have been deleted. Deleting a backup plan deletes the current version of a
 *          backup plan. Previous versions, if any, will still exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBackupPlanCommand extends $Command<
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DeleteBackupPlanCommandInput;
  constructor(input: DeleteBackupPlanCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput>;
  private serialize;
  private deserialize;
}
