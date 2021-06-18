import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetSupportedResourceTypesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetSupportedResourceTypesCommandInput {}
export interface GetSupportedResourceTypesCommandOutput extends GetSupportedResourceTypesOutput, __MetadataBearer {}
/**
 * <p>Returns the AWS resource types supported by AWS Backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetSupportedResourceTypesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetSupportedResourceTypesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetSupportedResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSupportedResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetSupportedResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSupportedResourceTypesCommand extends $Command<
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: GetSupportedResourceTypesCommandInput;
  constructor(input: GetSupportedResourceTypesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSupportedResourceTypesCommandInput, GetSupportedResourceTypesCommandOutput>;
  private serialize;
  private deserialize;
}
