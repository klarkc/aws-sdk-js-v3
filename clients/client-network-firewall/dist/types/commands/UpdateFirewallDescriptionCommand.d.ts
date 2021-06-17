import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateFirewallDescriptionRequest, UpdateFirewallDescriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallDescriptionCommandInput extends UpdateFirewallDescriptionRequest {
}
export interface UpdateFirewallDescriptionCommandOutput extends UpdateFirewallDescriptionResponse, __MetadataBearer {
}
/**
 * <p>Modifies the description for the specified firewall. Use the description to help you
 *          identify the firewall when you're working with it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDescriptionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDescriptionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDescriptionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallDescriptionCommand extends $Command<UpdateFirewallDescriptionCommandInput, UpdateFirewallDescriptionCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: UpdateFirewallDescriptionCommandInput;
    constructor(input: UpdateFirewallDescriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallDescriptionCommandInput, UpdateFirewallDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
