import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateChannelClassRequest, UpdateChannelClassResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateChannelClassCommandInput extends UpdateChannelClassRequest {
}
export interface UpdateChannelClassCommandOutput extends UpdateChannelClassResponse, __MetadataBearer {
}
/**
 * Changes the class of the channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateChannelClassCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateChannelClassCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateChannelClassCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelClassCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelClassCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateChannelClassCommand extends $Command<UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: UpdateChannelClassCommandInput;
    constructor(input: UpdateChannelClassCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput>;
    private serialize;
    private deserialize;
}
