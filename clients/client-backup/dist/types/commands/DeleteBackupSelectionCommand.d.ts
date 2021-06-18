import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DeleteBackupSelectionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteBackupSelectionCommandInput extends DeleteBackupSelectionInput {}
export interface DeleteBackupSelectionCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the resource selection associated with a backup plan that is specified by the
 *             <code>SelectionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBackupSelectionCommand extends $Command<
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DeleteBackupSelectionCommandInput;
  constructor(input: DeleteBackupSelectionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackupSelectionCommandInput, DeleteBackupSelectionCommandOutput>;
  private serialize;
  private deserialize;
}
