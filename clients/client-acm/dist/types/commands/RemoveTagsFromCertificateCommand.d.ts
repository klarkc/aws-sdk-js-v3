import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RemoveTagsFromCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RemoveTagsFromCertificateCommandInput extends RemoveTagsFromCertificateRequest {}
export interface RemoveTagsFromCertificateCommandOutput extends __MetadataBearer {}
/**
 * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
 *       you do not specify the value portion of the tag when calling this function, the tag will be
 *       removed regardless of value. If you specify a value, the tag is removed only if it is
 *       associated with the specified value. </p>
 *
 *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
 *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RemoveTagsFromCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RemoveTagsFromCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RemoveTagsFromCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromCertificateCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveTagsFromCertificateCommand extends $Command<
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  readonly input: RemoveTagsFromCertificateCommandInput;
  constructor(input: RemoveTagsFromCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
