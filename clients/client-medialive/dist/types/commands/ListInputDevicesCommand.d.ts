import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDevicesRequest, ListInputDevicesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInputDevicesCommandInput extends ListInputDevicesRequest {
}
export interface ListInputDevicesCommandOutput extends ListInputDevicesResponse, __MetadataBearer {
}
/**
 * List input devices
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDevicesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDevicesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputDevicesCommandInput} for command's `input` shape.
 * @see {@link ListInputDevicesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInputDevicesCommand extends $Command<ListInputDevicesCommandInput, ListInputDevicesCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListInputDevicesCommandInput;
    constructor(input: ListInputDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInputDevicesCommandInput, ListInputDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
