import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DisassociateLinkRequest, DisassociateLinkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateLinkCommandInput extends DisassociateLinkRequest {
}
export interface DisassociateLinkCommandOutput extends DisassociateLinkResponse, __MetadataBearer {
}
/**
 * <p>Disassociates an existing device from a link. You must first disassociate any customer
 *             gateways that are associated with the link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLinkCommandInput} for command's `input` shape.
 * @see {@link DisassociateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateLinkCommand extends $Command<DisassociateLinkCommandInput, DisassociateLinkCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DisassociateLinkCommandInput;
    constructor(input: DisassociateLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateLinkCommandInput, DisassociateLinkCommandOutput>;
    private serialize;
    private deserialize;
}
