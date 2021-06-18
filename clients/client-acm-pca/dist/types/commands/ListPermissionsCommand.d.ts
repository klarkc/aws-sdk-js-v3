import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListPermissionsCommandInput extends ListPermissionsRequest {}
export interface ListPermissionsCommandOutput extends ListPermissionsResponse, __MetadataBearer {}
/**
 * <p>List all permissions on a private CA, if any, granted to the AWS Certificate Manager (ACM) service
 * 			principal (acm.amazonaws.com). </p>
 * 		       <p>These permissions allow ACM to issue and renew ACM certificates that reside in the
 * 			same AWS account as the CA. </p>
 * 		       <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and
 * 			revoked with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p>
 * 		       <p class="title">
 *             <b>About Permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 * 			            <p>If the private CA and the certificates it issues reside in the same
 * 			account, you can use <code>CreatePermission</code> to grant permissions for ACM to
 * 			carry out automatic certificate renewals.</p>
 * 		          </li>
 *             <li>
 * 			            <p>For automatic certificate renewal to succeed, the ACM service principal
 * 			needs permissions to create, retrieve, and list certificates.</p>
 * 		          </li>
 *             <li>
 * 			            <p>If the private CA and the ACM certificates reside in different accounts,
 * 			then permissions cannot be used to enable automatic renewals. Instead,
 * 			the ACM certificate owner must set up a resource-based policy to enable
 * 			cross-account issuance and renewals. For more information, see
 * 			<a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/pca-rbp.html">Using a Resource
 * 			Based Policy with ACM Private CA</a>.</p>
 * 		          </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ListPermissionsCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ListPermissionsCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPermissionsCommand extends $Command<
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: ListPermissionsCommandInput;
  constructor(input: ListPermissionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionsCommandInput, ListPermissionsCommandOutput>;
  private serialize;
  private deserialize;
}
