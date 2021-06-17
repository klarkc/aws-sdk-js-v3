import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRoleRequest, GetRoleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRoleCommandInput extends GetRoleRequest {
}
export interface GetRoleCommandOutput extends GetRoleResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the specified role, including the role's path, GUID, ARN,
 *             and the role's trust policy that grants permission to assume the role. For more
 *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoleCommandInput} for command's `input` shape.
 * @see {@link GetRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRoleCommand extends $Command<GetRoleCommandInput, GetRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetRoleCommandInput;
    constructor(input: GetRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRoleCommandInput, GetRoleCommandOutput>;
    private serialize;
    private deserialize;
}
