import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificatesRequest, ListServerCertificatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServerCertificatesCommandInput extends ListServerCertificatesRequest {
}
export interface ListServerCertificatesCommandOutput extends ListServerCertificatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the server certificates stored in IAM that have the specified path prefix. If
 *             none exist, the operation returns an empty list.</p>
 *         <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of AWS services that can use the server certificates that
 *             you manage with IAM.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServerCertificatesCommand extends $Command<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListServerCertificatesCommandInput;
    constructor(input: ListServerCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
