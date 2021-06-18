import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { StartRestoreJobInput, StartRestoreJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartRestoreJobCommandInput extends StartRestoreJobInput {}
export interface StartRestoreJobCommandOutput extends StartRestoreJobOutput, __MetadataBearer {}
/**
 * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StartRestoreJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRestoreJobCommandInput} for command's `input` shape.
 * @see {@link StartRestoreJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartRestoreJobCommand extends $Command<
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: StartRestoreJobCommandInput;
  constructor(input: StartRestoreJobCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRestoreJobCommandInput, StartRestoreJobCommandOutput>;
  private serialize;
  private deserialize;
}
