import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {
}
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {
}
/**
 * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against.
 *             This API is available through both Write and Query.</p>
 *         <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
 *             including the management and mapping of the service endpoints,
 *             <i>it is not recommended that you use this API unless</i>:</p>
 *         <ul>
 *             <li>
 *                <p>Your application uses a programming language that does not yet have SDK support</p>
 *             </li>
 *             <li>
 *                <p>You require better control over the client-side implementation</p>
 *             </li>
 *          </ul>
 *         <p>For detailed information on how to use DescribeEndpoints,
 *             see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEndpointsCommand extends $Command<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput, TimestreamQueryClientResolvedConfig> {
    readonly input: DescribeEndpointsCommandInput;
    constructor(input: DescribeEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamQueryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
