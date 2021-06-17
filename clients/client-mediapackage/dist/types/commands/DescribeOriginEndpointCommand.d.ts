import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeOriginEndpointRequest, DescribeOriginEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOriginEndpointCommandInput extends DescribeOriginEndpointRequest {
}
export interface DescribeOriginEndpointCommandOutput extends DescribeOriginEndpointResponse, __MetadataBearer {
}
/**
 * Gets details about an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DescribeOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOriginEndpointCommand extends $Command<DescribeOriginEndpointCommandInput, DescribeOriginEndpointCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: DescribeOriginEndpointCommandInput;
    constructor(input: DescribeOriginEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOriginEndpointCommandInput, DescribeOriginEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
