import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdatePublicKeyRequest, UpdatePublicKeyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdatePublicKeyCommandInput extends UpdatePublicKeyRequest {}
export interface UpdatePublicKeyCommandOutput extends UpdatePublicKeyResult, __MetadataBearer {}
/**
 * <p>Update public key information. Note that the only value you can change is the comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdatePublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePublicKeyCommand extends $Command<
  UpdatePublicKeyCommandInput,
  UpdatePublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: UpdatePublicKeyCommandInput;
  constructor(input: UpdatePublicKeyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput>;
  private serialize;
  private deserialize;
}
