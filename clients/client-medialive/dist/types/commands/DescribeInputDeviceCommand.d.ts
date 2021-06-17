import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputDeviceRequest, DescribeInputDeviceResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInputDeviceCommandInput extends DescribeInputDeviceRequest {
}
export interface DescribeInputDeviceCommandOutput extends DescribeInputDeviceResponse, __MetadataBearer {
}
/**
 * Gets the details for the input device
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInputDeviceCommand extends $Command<DescribeInputDeviceCommandInput, DescribeInputDeviceCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DescribeInputDeviceCommandInput;
    constructor(input: DescribeInputDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInputDeviceCommandInput, DescribeInputDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
