import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeletePublicKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeletePublicKeyCommandInput extends DeletePublicKeyRequest {}
export interface DeletePublicKeyCommandOutput extends __MetadataBearer {}
/**
 * <p>Remove a public key you previously added to CloudFront.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeletePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeletePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeletePublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeletePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePublicKeyCommand extends $Command<
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: DeletePublicKeyCommandInput;
  constructor(input: DeletePublicKeyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput>;
  private serialize;
  private deserialize;
}
