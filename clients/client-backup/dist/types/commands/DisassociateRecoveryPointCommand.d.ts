import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DisassociateRecoveryPointInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DisassociateRecoveryPointCommandInput extends DisassociateRecoveryPointInput {}
export interface DisassociateRecoveryPointCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the specified continuous backup recovery point from AWS Backup and releases
 *          control of that continuous backup to the source service, such as Amazon RDS. The source
 *          service will continue to create and retain continuous backups using the lifecycle that you
 *          specified in your original backup plan.</p>
 *          <p>Does not support snapshot backup recovery points.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DisassociateRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DisassociateRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateRecoveryPointCommand extends $Command<
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DisassociateRecoveryPointCommandInput;
  constructor(input: DisassociateRecoveryPointCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateRecoveryPointCommandInput, DisassociateRecoveryPointCommandOutput>;
  private serialize;
  private deserialize;
}
