import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccountAuthorizationDetailsCommandInput extends GetAccountAuthorizationDetailsRequest {
}
export interface GetAccountAuthorizationDetailsCommandOutput extends GetAccountAuthorizationDetailsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS
 *             account, including their relationships to one another. Use this operation to obtain a
 *             snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
 *             in your account.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *         <p>You can optionally filter the results using the <code>Filter</code> parameter. You can
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountAuthorizationDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountAuthorizationDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccountAuthorizationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountAuthorizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetAccountAuthorizationDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccountAuthorizationDetailsCommand extends $Command<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccountAuthorizationDetailsCommandInput;
    constructor(input: GetAccountAuthorizationDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
