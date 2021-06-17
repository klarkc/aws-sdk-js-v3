import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputDeviceThumbnailRequest, DescribeInputDeviceThumbnailResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInputDeviceThumbnailCommandInput extends DescribeInputDeviceThumbnailRequest {
}
export interface DescribeInputDeviceThumbnailCommandOutput extends DescribeInputDeviceThumbnailResponse, __MetadataBearer {
}
/**
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInputDeviceThumbnailCommand extends $Command<DescribeInputDeviceThumbnailCommandInput, DescribeInputDeviceThumbnailCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeInputDeviceThumbnailCommandInput;
    constructor(input: DescribeInputDeviceThumbnailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInputDeviceThumbnailCommandInput, DescribeInputDeviceThumbnailCommandOutput>;
    private serialize;
    private deserialize;
}
