import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateConnectionFromLagCommandInput extends DisassociateConnectionFromLagRequest {
}
export interface DisassociateConnectionFromLagCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
 *       interrupted and re-established as a standalone connection (the connection is not
 *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
 *       If the LAG has associated virtual interfaces or hosted connections, they remain
 *       associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is
 *       automatically converted to an interconnect.</p>
 *          <p>If disassociating the connection would cause the LAG to fall below its setting for
 *       minimum number of operational connections, the request fails, except when it's the last
 *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
 *       an empty LAG with no physical connections. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateConnectionFromLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateConnectionFromLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DisassociateConnectionFromLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectionFromLagCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionFromLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateConnectionFromLagCommand extends $Command<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DisassociateConnectionFromLagCommandInput;
    constructor(input: DisassociateConnectionFromLagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput>;
    private serialize;
    private deserialize;
}
