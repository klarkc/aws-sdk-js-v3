import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupVaultsInput, ListBackupVaultsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBackupVaultsCommandInput extends ListBackupVaultsInput {}
export interface ListBackupVaultsCommandOutput extends ListBackupVaultsOutput, __MetadataBearer {}
/**
 * <p>Returns a list of recovery point storage containers along with information about
 *          them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupVaultsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupVaultsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupVaultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupVaultsCommandInput} for command's `input` shape.
 * @see {@link ListBackupVaultsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackupVaultsCommand extends $Command<
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListBackupVaultsCommandInput;
  constructor(input: ListBackupVaultsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput>;
  private serialize;
  private deserialize;
}
