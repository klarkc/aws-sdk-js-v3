import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeBackupJobInput, DescribeBackupJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeBackupJobCommandInput extends DescribeBackupJobInput {}
export interface DescribeBackupJobCommandOutput extends DescribeBackupJobOutput, __MetadataBearer {}
/**
 * <p>Returns backup job details for the specified <code>BackupJobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBackupJobCommand extends $Command<
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DescribeBackupJobCommandInput;
  constructor(input: DescribeBackupJobCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput>;
  private serialize;
  private deserialize;
}
