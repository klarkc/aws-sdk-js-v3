import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeHostedConnectionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHostedConnectionsCommandInput extends DescribeHostedConnectionsRequest {
}
export interface DescribeHostedConnectionsCommandOutput extends Connections, __MetadataBearer {
}
/**
 * <p>Lists the hosted connections that have been provisioned on the specified
 *       interconnect or link aggregation group (LAG).</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeHostedConnectionsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeHostedConnectionsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeHostedConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostedConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostedConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHostedConnectionsCommand extends $Command<DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeHostedConnectionsCommandInput;
    constructor(input: DescribeHostedConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
