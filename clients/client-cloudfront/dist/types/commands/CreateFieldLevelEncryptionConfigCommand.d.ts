import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateFieldLevelEncryptionConfigCommandInput extends CreateFieldLevelEncryptionConfigRequest {}
export interface CreateFieldLevelEncryptionConfigCommandOutput
  extends CreateFieldLevelEncryptionConfigResult,
    __MetadataBearer {}
/**
 * <p>Create a new field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFieldLevelEncryptionConfigCommand extends $Command<
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: CreateFieldLevelEncryptionConfigCommandInput;
  constructor(input: CreateFieldLevelEncryptionConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput>;
  private serialize;
  private deserialize;
}
