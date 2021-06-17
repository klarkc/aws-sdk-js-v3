import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CancelHandshakeRequest, CancelHandshakeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelHandshakeCommandInput extends CancelHandshakeRequest {
}
export interface CancelHandshakeCommandOutput extends CancelHandshakeResponse, __MetadataBearer {
}
/**
 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
 *                 <code>CANCELED</code>.</p>
 *         <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient
 *             can no longer respond to that handshake.</p>
 *         <p>After you cancel a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CancelHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CancelHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CancelHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelHandshakeCommandInput} for command's `input` shape.
 * @see {@link CancelHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelHandshakeCommand extends $Command<CancelHandshakeCommandInput, CancelHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CancelHandshakeCommandInput;
    constructor(input: CancelHandshakeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelHandshakeCommandInput, CancelHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
