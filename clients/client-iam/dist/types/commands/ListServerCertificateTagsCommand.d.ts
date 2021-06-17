import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificateTagsRequest, ListServerCertificateTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServerCertificateTagsCommandInput extends ListServerCertificateTagsRequest {
}
export interface ListServerCertificateTagsCommandOutput extends ListServerCertificateTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags that are attached to the specified IAM server certificate. The
 *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
 *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 *         manage, and deploy your server certificates. For more information about IAM server
 *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
 *           certificates</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificateTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificateTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServerCertificateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerCertificateTagsCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificateTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServerCertificateTagsCommand extends $Command<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListServerCertificateTagsCommandInput;
    constructor(input: ListServerCertificateTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
