import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClusterEndpointsCommandInput extends DescribeDBClusterEndpointsMessage {
}
export interface DescribeDBClusterEndpointsCommandOutput extends DBClusterEndpointMessage, __MetadataBearer {
}
/**
 * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *         and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterEndpointsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterEndpointsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClusterEndpointsCommand extends $Command<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBClusterEndpointsCommandInput;
    constructor(input: DescribeDBClusterEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
