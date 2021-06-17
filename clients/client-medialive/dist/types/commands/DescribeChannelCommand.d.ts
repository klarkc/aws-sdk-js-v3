import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeChannelCommandInput extends DescribeChannelRequest {
}
export interface DescribeChannelCommandOutput extends DescribeChannelResponse, __MetadataBearer {
}
/**
 * Gets details about a channel
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeChannelCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeChannelCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeChannelCommand extends $Command<DescribeChannelCommandInput, DescribeChannelCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeChannelCommandInput;
    constructor(input: DescribeChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeChannelCommandInput, DescribeChannelCommandOutput>;
    private serialize;
    private deserialize;
}
