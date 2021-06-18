import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExportBackupPlanTemplateCommandInput extends ExportBackupPlanTemplateInput {}
export interface ExportBackupPlanTemplateCommandOutput extends ExportBackupPlanTemplateOutput, __MetadataBearer {}
/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ExportBackupPlanTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ExportBackupPlanTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ExportBackupPlanTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBackupPlanTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportBackupPlanTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportBackupPlanTemplateCommand extends $Command<
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ExportBackupPlanTemplateCommandInput;
  constructor(input: ExportBackupPlanTemplateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportBackupPlanTemplateCommandInput, ExportBackupPlanTemplateCommandOutput>;
  private serialize;
  private deserialize;
}
