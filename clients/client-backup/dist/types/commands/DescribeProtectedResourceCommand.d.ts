import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeProtectedResourceInput, DescribeProtectedResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeProtectedResourceCommandInput extends DescribeProtectedResourceInput {}
export interface DescribeProtectedResourceCommandOutput extends DescribeProtectedResourceOutput, __MetadataBearer {}
/**
 * <p>Returns information about a saved resource, including the last time it was backed up,
 *          its Amazon Resource Name (ARN), and the AWS service type of the saved resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeProtectedResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeProtectedResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeProtectedResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectedResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectedResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProtectedResourceCommand extends $Command<
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: DescribeProtectedResourceCommandInput;
  constructor(input: DescribeProtectedResourceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectedResourceCommandInput, DescribeProtectedResourceCommandOutput>;
  private serialize;
  private deserialize;
}
