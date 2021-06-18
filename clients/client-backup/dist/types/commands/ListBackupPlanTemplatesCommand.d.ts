import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBackupPlanTemplatesCommandInput extends ListBackupPlanTemplatesInput {}
export interface ListBackupPlanTemplatesCommandOutput extends ListBackupPlanTemplatesOutput, __MetadataBearer {}
/**
 * <p>Returns metadata of your saved backup plan templates, including the template ID, name,
 *          and the creation and deletion dates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanTemplatesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanTemplatesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanTemplatesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackupPlanTemplatesCommand extends $Command<
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListBackupPlanTemplatesCommandInput;
  constructor(input: ListBackupPlanTemplatesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupPlanTemplatesCommandInput, ListBackupPlanTemplatesCommandOutput>;
  private serialize;
  private deserialize;
}
