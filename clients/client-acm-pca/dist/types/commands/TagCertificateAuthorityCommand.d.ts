import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { TagCertificateAuthorityRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface TagCertificateAuthorityCommandInput extends TagCertificateAuthorityRequest {}
export interface TagCertificateAuthorityCommandOutput extends __MetadataBearer {}
/**
 * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify
 * 			and organize your AWS resources. Each tag consists of a key and an optional value. You
 * 			specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag
 * 			by using a key-value pair. You can apply a tag to just one private CA if you want to
 * 			identify a specific characteristic of that CA, or you can apply the same tag to multiple
 * 			private CAs if you want to filter for a common relationship among those CAs. To remove
 * 			one or more tags, use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, TagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, TagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new TagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link TagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagCertificateAuthorityCommand extends $Command<
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: TagCertificateAuthorityCommandInput;
  constructor(input: TagCertificateAuthorityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput>;
  private serialize;
  private deserialize;
}
