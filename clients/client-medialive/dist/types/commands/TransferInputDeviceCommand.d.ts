import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { TransferInputDeviceRequest, TransferInputDeviceResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TransferInputDeviceCommandInput extends TransferInputDeviceRequest {
}
export interface TransferInputDeviceCommandOutput extends TransferInputDeviceResponse, __MetadataBearer {
}
/**
 * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, TransferInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, TransferInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new TransferInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferInputDeviceCommandInput} for command's `input` shape.
 * @see {@link TransferInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TransferInputDeviceCommand extends $Command<TransferInputDeviceCommandInput, TransferInputDeviceCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: TransferInputDeviceCommandInput;
    constructor(input: TransferInputDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransferInputDeviceCommandInput, TransferInputDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
