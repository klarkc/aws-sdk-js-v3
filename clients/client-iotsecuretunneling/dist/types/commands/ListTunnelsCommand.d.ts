import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { ListTunnelsRequest, ListTunnelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTunnelsCommandInput extends ListTunnelsRequest {
}
export interface ListTunnelsCommandOutput extends ListTunnelsResponse, __MetadataBearer {
}
/**
 * <p>List all tunnels for an AWS account. Tunnels are listed by creation time in
 * 			descending order, newer tunnels will be listed before older tunnels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, ListTunnelsCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, ListTunnelsCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new ListTunnelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTunnelsCommandInput} for command's `input` shape.
 * @see {@link ListTunnelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTunnelsCommand extends $Command<ListTunnelsCommandInput, ListTunnelsCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: ListTunnelsCommandInput;
    constructor(input: ListTunnelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTunnelsCommandInput, ListTunnelsCommandOutput>;
    private serialize;
    private deserialize;
}
