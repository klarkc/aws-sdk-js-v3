import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteScheduleRequest, DeleteScheduleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteScheduleCommandInput extends DeleteScheduleRequest {
}
export interface DeleteScheduleCommandOutput extends DeleteScheduleResponse, __MetadataBearer {
}
/**
 * Delete all schedule actions on a channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteScheduleCommand extends $Command<DeleteScheduleCommandInput, DeleteScheduleCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DeleteScheduleCommandInput;
    constructor(input: DeleteScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduleCommandInput, DeleteScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
