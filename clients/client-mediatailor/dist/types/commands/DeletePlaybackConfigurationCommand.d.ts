import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeletePlaybackConfigurationRequest, DeletePlaybackConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePlaybackConfigurationCommandInput extends DeletePlaybackConfigurationRequest {
}
export interface DeletePlaybackConfigurationCommandOutput extends DeletePlaybackConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the playback configuration for the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeletePlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePlaybackConfigurationCommand extends $Command<DeletePlaybackConfigurationCommandInput, DeletePlaybackConfigurationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DeletePlaybackConfigurationCommandInput;
    constructor(input: DeletePlaybackConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlaybackConfigurationCommandInput, DeletePlaybackConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
