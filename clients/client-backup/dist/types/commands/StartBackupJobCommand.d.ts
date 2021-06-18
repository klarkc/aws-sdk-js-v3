import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { StartBackupJobInput, StartBackupJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartBackupJobCommandInput extends StartBackupJobInput {}
export interface StartBackupJobCommandOutput extends StartBackupJobOutput, __MetadataBearer {}
/**
 * <p>Starts an on-demand backup job for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StartBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBackupJobCommandInput} for command's `input` shape.
 * @see {@link StartBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartBackupJobCommand extends $Command<
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: StartBackupJobCommandInput;
  constructor(input: StartBackupJobCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBackupJobCommandInput, StartBackupJobCommandOutput>;
  private serialize;
  private deserialize;
}
