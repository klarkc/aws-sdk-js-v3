import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UntagCertificateAuthorityRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UntagCertificateAuthorityCommandInput extends UntagCertificateAuthorityRequest {}
export interface UntagCertificateAuthorityCommandOutput extends __MetadataBearer {}
/**
 * <p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If
 * 			you do not specify the value portion of the tag when calling this action, the tag will
 * 			be removed regardless of value. If you specify a value, the tag is removed only if it is
 * 			associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UntagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UntagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new UntagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UntagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagCertificateAuthorityCommand extends $Command<
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: UntagCertificateAuthorityCommandInput;
  constructor(input: UntagCertificateAuthorityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput>;
  private serialize;
  private deserialize;
}
