import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeMultiplexRequest, DescribeMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMultiplexCommandInput extends DescribeMultiplexRequest {
}
export interface DescribeMultiplexCommandOutput extends DescribeMultiplexResponse, __MetadataBearer {
}
/**
 * Gets details about a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMultiplexCommand extends $Command<DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeMultiplexCommandInput;
    constructor(input: DescribeMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
