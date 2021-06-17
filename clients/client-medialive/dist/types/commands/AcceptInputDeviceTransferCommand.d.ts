import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { AcceptInputDeviceTransferRequest, AcceptInputDeviceTransferResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptInputDeviceTransferCommandInput extends AcceptInputDeviceTransferRequest {
}
export interface AcceptInputDeviceTransferCommandOutput extends AcceptInputDeviceTransferResponse, __MetadataBearer {
}
/**
 * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, AcceptInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, AcceptInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new AcceptInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptInputDeviceTransferCommand extends $Command<AcceptInputDeviceTransferCommandInput, AcceptInputDeviceTransferCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: AcceptInputDeviceTransferCommandInput;
    constructor(input: AcceptInputDeviceTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInputDeviceTransferCommandInput, AcceptInputDeviceTransferCommandOutput>;
    private serialize;
    private deserialize;
}
