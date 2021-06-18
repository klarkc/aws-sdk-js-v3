import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { AddTagsToCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AddTagsToCertificateCommandInput extends AddTagsToCertificateRequest {}
export interface AddTagsToCertificateCommandOutput extends __MetadataBearer {}
/**
 * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to
 *       identify and organize your AWS resources. Each tag consists of a <code>key</code> and an
 *       optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name
 *       (ARN). You specify the tag by using a key-value pair. </p>
 *
 *          <p>You can apply a tag to just one certificate if you want to identify a specific
 *       characteristic of that certificate, or you can apply the same tag to multiple certificates if
 *       you want to filter for a common relationship among those certificates. Similarly, you can
 *       apply the same tag to multiple resources if you want to specify a relationship among those
 *       resources. For example, you can add the same tag to an ACM certificate and an Elastic Load
 *       Balancing load balancer to indicate that they are both used by the same website. For more
 *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM
 *         certificates</a>. </p>
 *
 *          <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To
 *       view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, AddTagsToCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, AddTagsToCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new AddTagsToCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToCertificateCommandInput} for command's `input` shape.
 * @see {@link AddTagsToCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddTagsToCertificateCommand extends $Command<
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  readonly input: AddTagsToCertificateCommandInput;
  constructor(input: AddTagsToCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
