import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBackupPlanVersionsCommandInput extends ListBackupPlanVersionsInput {}
export interface ListBackupPlanVersionsCommandOutput extends ListBackupPlanVersionsOutput, __MetadataBearer {}
/**
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanVersionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanVersionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanVersionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBackupPlanVersionsCommand extends $Command<
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListBackupPlanVersionsCommandInput;
  constructor(input: ListBackupPlanVersionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupPlanVersionsCommandInput, ListBackupPlanVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
