import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEndpointRequest, DescribeEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEndpointCommandInput extends DescribeEndpointRequest {
}
export interface DescribeEndpointCommandOutput extends DescribeEndpointResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties associated with a specific endpoint. Use this operation to get the
 *       status of an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEndpointCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEndpointCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEndpointCommand extends $Command<DescribeEndpointCommandInput, DescribeEndpointCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEndpointCommandInput;
    constructor(input: DescribeEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointCommandInput, DescribeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
