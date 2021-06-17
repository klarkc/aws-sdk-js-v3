import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDeviceTransfersRequest, ListInputDeviceTransfersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInputDeviceTransfersCommandInput extends ListInputDeviceTransfersRequest {
}
export interface ListInputDeviceTransfersCommandOutput extends ListInputDeviceTransfersResponse, __MetadataBearer {
}
/**
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDeviceTransfersCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDeviceTransfersCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputDeviceTransfersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputDeviceTransfersCommandInput} for command's `input` shape.
 * @see {@link ListInputDeviceTransfersCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInputDeviceTransfersCommand extends $Command<ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListInputDeviceTransfersCommandInput;
    constructor(input: ListInputDeviceTransfersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput>;
    private serialize;
    private deserialize;
}
