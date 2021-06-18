import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupPlanFromTemplateInput, GetBackupPlanFromTemplateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetBackupPlanFromTemplateCommandInput extends GetBackupPlanFromTemplateInput {}
export interface GetBackupPlanFromTemplateCommandOutput extends GetBackupPlanFromTemplateOutput, __MetadataBearer {}
/**
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBackupPlanFromTemplateCommand extends $Command<
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: GetBackupPlanFromTemplateCommandInput;
  constructor(input: GetBackupPlanFromTemplateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBackupPlanFromTemplateCommandInput, GetBackupPlanFromTemplateCommandOutput>;
  private serialize;
  private deserialize;
}
