import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateSubnetChangeProtectionRequest, UpdateSubnetChangeProtectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSubnetChangeProtectionCommandInput extends UpdateSubnetChangeProtectionRequest {
}
export interface UpdateSubnetChangeProtectionCommandOutput extends UpdateSubnetChangeProtectionResponse, __MetadataBearer {
}
/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateSubnetChangeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubnetChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubnetChangeProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSubnetChangeProtectionCommand extends $Command<UpdateSubnetChangeProtectionCommandInput, UpdateSubnetChangeProtectionCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: UpdateSubnetChangeProtectionCommandInput;
    constructor(input: UpdateSubnetChangeProtectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSubnetChangeProtectionCommandInput, UpdateSubnetChangeProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
