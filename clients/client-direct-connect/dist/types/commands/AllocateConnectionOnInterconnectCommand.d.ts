import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateConnectionOnInterconnectRequest, Connection } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocateConnectionOnInterconnectCommandInput extends AllocateConnectionOnInterconnectRequest {
}
export interface AllocateConnectionOnInterconnectCommandOutput extends Connection, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
 *          <p>Creates a hosted connection on an interconnect.</p>
 *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateConnectionOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateConnectionOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateConnectionOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateConnectionOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link AllocateConnectionOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocateConnectionOnInterconnectCommand extends $Command<AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateConnectionOnInterconnectCommandInput;
    constructor(input: AllocateConnectionOnInterconnectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
