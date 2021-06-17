import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeclineHandshakeRequest, DeclineHandshakeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeclineHandshakeCommandInput extends DeclineHandshakeRequest {
}
export interface DeclineHandshakeCommandOutput extends DeclineHandshakeResponse, __MetadataBearer {
}
/**
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *         <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *         <p>After you decline a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeclineHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeclineHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineHandshakeCommandInput} for command's `input` shape.
 * @see {@link DeclineHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeclineHandshakeCommand extends $Command<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeclineHandshakeCommandInput;
    constructor(input: DeclineHandshakeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
