import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputDeviceRequest, UpdateInputDeviceResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInputDeviceCommandInput extends UpdateInputDeviceRequest {
}
export interface UpdateInputDeviceCommandOutput extends UpdateInputDeviceResponse, __MetadataBearer {
}
/**
 * Updates the parameters for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInputDeviceCommand extends $Command<UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: UpdateInputDeviceCommandInput;
    constructor(input: UpdateInputDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
