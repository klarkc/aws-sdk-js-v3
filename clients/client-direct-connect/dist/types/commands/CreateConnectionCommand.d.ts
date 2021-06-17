import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, CreateConnectionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectionCommandInput extends CreateConnectionRequest {
}
export interface CreateConnectionCommandOutput extends Connection, __MetadataBearer {
}
/**
 * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p>
 *
 *          <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic
 *       cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p>
 *          <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p>
 *          <p>You can automatically add the new connection to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new connection is allocated on the
 *       same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
 *       the request fails and no connection is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
