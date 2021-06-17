import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeHandshakeRequest, DescribeHandshakeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHandshakeCommandInput extends DescribeHandshakeRequest {
}
export interface DescribeHandshakeCommandOutput extends DescribeHandshakeResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a previously requested handshake. The handshake ID comes
 *             from the response to the original <a>InviteAccountToOrganization</a>
 *             operation that generated the handshake.</p>
 *         <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> for only 30 days after they change to that state. They're then
 *             deleted and no longer accessible.</p>
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHandshakeCommandInput} for command's `input` shape.
 * @see {@link DescribeHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHandshakeCommand extends $Command<DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeHandshakeCommandInput;
    constructor(input: DescribeHandshakeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
