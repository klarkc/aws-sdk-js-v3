import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOpenIDConnectProvidersRequest, ListOpenIDConnectProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOpenIDConnectProvidersCommandInput extends ListOpenIDConnectProvidersRequest {
}
export interface ListOpenIDConnectProvidersCommandOutput extends ListOpenIDConnectProvidersResponse, __MetadataBearer {
}
/**
 * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
 *             defined in the AWS account.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListOpenIDConnectProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpenIDConnectProvidersCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOpenIDConnectProvidersCommand extends $Command<ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListOpenIDConnectProvidersCommandInput;
    constructor(input: ListOpenIDConnectProvidersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
