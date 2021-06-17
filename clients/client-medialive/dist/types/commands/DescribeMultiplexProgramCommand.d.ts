import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeMultiplexProgramRequest, DescribeMultiplexProgramResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMultiplexProgramCommandInput extends DescribeMultiplexProgramRequest {
}
export interface DescribeMultiplexProgramCommandOutput extends DescribeMultiplexProgramResponse, __MetadataBearer {
}
/**
 * Get the details for a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMultiplexProgramCommand extends $Command<DescribeMultiplexProgramCommandInput, DescribeMultiplexProgramCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeMultiplexProgramCommandInput;
    constructor(input: DescribeMultiplexProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMultiplexProgramCommandInput, DescribeMultiplexProgramCommandOutput>;
    private serialize;
    private deserialize;
}
