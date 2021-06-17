import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInputCommandInput extends DescribeInputRequest {
}
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {
}
/**
 * Produces details about an input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInputCommand extends $Command<DescribeInputCommandInput, DescribeInputCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeInputCommandInput;
    constructor(input: DescribeInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInputCommandInput, DescribeInputCommandOutput>;
    private serialize;
    private deserialize;
}
