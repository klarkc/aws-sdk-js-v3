import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeRegionSettingsInput, DescribeRegionSettingsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeRegionSettingsCommandInput extends DescribeRegionSettingsInput {}
export interface DescribeRegionSettingsCommandOutput extends DescribeRegionSettingsOutput, __MetadataBearer {}
/**
 * <p>Returns the current service opt-in settings for the Region. If service-opt-in is enabled
 *          for a service, AWS Backup tries to protect that service's resources in this Region, when
 *          the resource is included in an on-demand backup or scheduled backup plan. Otherwise, AWS
 *          Backup does not try to protect that service's resources in this Region, AWS Backup does not
 *          try to protect that service's resources in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRegionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRegionSettingsCommand extends $Command<
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DescribeRegionSettingsCommandInput;
  constructor(input: DescribeRegionSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegionSettingsCommandInput, DescribeRegionSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
