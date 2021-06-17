import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetPlaybackConfigurationRequest, GetPlaybackConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPlaybackConfigurationCommandInput extends GetPlaybackConfigurationRequest {
}
export interface GetPlaybackConfigurationCommandOutput extends GetPlaybackConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Returns the playback configuration for the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new GetPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPlaybackConfigurationCommand extends $Command<GetPlaybackConfigurationCommandInput, GetPlaybackConfigurationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: GetPlaybackConfigurationCommandInput;
    constructor(input: GetPlaybackConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlaybackConfigurationCommandInput, GetPlaybackConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
