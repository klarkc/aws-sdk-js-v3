import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { RejectInputDeviceTransferRequest, RejectInputDeviceTransferResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectInputDeviceTransferCommandInput extends RejectInputDeviceTransferRequest {
}
export interface RejectInputDeviceTransferCommandOutput extends RejectInputDeviceTransferResponse, __MetadataBearer {
}
/**
 * Reject the transfer of the specified input device to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, RejectInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, RejectInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new RejectInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link RejectInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectInputDeviceTransferCommand extends $Command<RejectInputDeviceTransferCommandInput, RejectInputDeviceTransferCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: RejectInputDeviceTransferCommandInput;
    constructor(input: RejectInputDeviceTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectInputDeviceTransferCommandInput, RejectInputDeviceTransferCommandOutput>;
    private serialize;
    private deserialize;
}
