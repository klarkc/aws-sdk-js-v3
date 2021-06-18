import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { StopBackupJobInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StopBackupJobCommandInput extends StopBackupJobInput {}
export interface StopBackupJobCommandOutput extends __MetadataBearer {}
/**
 * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StopBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StopBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StopBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBackupJobCommandInput} for command's `input` shape.
 * @see {@link StopBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopBackupJobCommand extends $Command<
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: StopBackupJobCommandInput;
  constructor(input: StopBackupJobCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopBackupJobCommandInput, StopBackupJobCommandOutput>;
  private serialize;
  private deserialize;
}
