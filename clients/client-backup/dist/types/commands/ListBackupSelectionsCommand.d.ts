import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupSelectionsInput, ListBackupSelectionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBackupSelectionsCommandInput extends ListBackupSelectionsInput {}
export interface ListBackupSelectionsCommandOutput extends ListBackupSelectionsOutput, __MetadataBearer {}
/**
 * <p>Returns an array containing metadata of the resources associated with the target backup
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupSelectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackupSelectionsCommand extends $Command<
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListBackupSelectionsCommandInput;
  constructor(input: ListBackupSelectionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupSelectionsCommandInput, ListBackupSelectionsCommandOutput>;
  private serialize;
  private deserialize;
}
