import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutPlaybackConfigurationRequest, PutPlaybackConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutPlaybackConfigurationCommandInput extends PutPlaybackConfigurationRequest {
}
export interface PutPlaybackConfigurationCommandOutput extends PutPlaybackConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Adds a new playback configuration to AWS Elemental MediaTailor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new PutPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutPlaybackConfigurationCommand extends $Command<PutPlaybackConfigurationCommandInput, PutPlaybackConfigurationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: PutPlaybackConfigurationCommandInput;
    constructor(input: PutPlaybackConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPlaybackConfigurationCommandInput, PutPlaybackConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
