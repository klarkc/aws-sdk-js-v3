import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListRestoreJobsInput, ListRestoreJobsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListRestoreJobsCommandInput extends ListRestoreJobsInput {}
export interface ListRestoreJobsCommandOutput extends ListRestoreJobsOutput, __MetadataBearer {}
/**
 * <p>Returns a list of jobs that AWS Backup initiated to restore a saved resource, including
 *          metadata about the recovery process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRestoreJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRestoreJobsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRestoreJobsCommand extends $Command<
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListRestoreJobsCommandInput;
  constructor(input: ListRestoreJobsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput>;
  private serialize;
  private deserialize;
}
