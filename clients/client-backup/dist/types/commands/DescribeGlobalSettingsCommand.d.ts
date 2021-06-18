import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeGlobalSettingsInput, DescribeGlobalSettingsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeGlobalSettingsCommandInput extends DescribeGlobalSettingsInput {}
export interface DescribeGlobalSettingsCommandOutput extends DescribeGlobalSettingsOutput, __MetadataBearer {}
/**
 * <p>Describes the global settings of the AWS account, including whether it is opted in to
 *          cross-account backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGlobalSettingsCommand extends $Command<
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DescribeGlobalSettingsCommandInput;
  constructor(input: DescribeGlobalSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalSettingsCommandInput, DescribeGlobalSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
