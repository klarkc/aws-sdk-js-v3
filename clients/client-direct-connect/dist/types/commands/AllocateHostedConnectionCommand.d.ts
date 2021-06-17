import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateHostedConnectionRequest, Connection } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocateHostedConnectionCommandInput extends AllocateHostedConnectionRequest {
}
export interface AllocateHostedConnectionCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
 *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateHostedConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AllocateHostedConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocateHostedConnectionCommand extends $Command<AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateHostedConnectionCommandInput;
    constructor(input: AllocateHostedConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
