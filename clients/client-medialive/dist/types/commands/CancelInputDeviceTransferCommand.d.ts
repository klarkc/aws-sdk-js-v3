import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CancelInputDeviceTransferRequest, CancelInputDeviceTransferResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelInputDeviceTransferCommandInput extends CancelInputDeviceTransferRequest {
}
export interface CancelInputDeviceTransferCommandOutput extends CancelInputDeviceTransferResponse, __MetadataBearer {
}
/**
 * Cancel an input device transfer that you have requested.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CancelInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CancelInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CancelInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link CancelInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelInputDeviceTransferCommand extends $Command<CancelInputDeviceTransferCommandInput, CancelInputDeviceTransferCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: CancelInputDeviceTransferCommandInput;
    constructor(input: CancelInputDeviceTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelInputDeviceTransferCommandInput, CancelInputDeviceTransferCommandOutput>;
    private serialize;
    private deserialize;
}
