import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListPlaybackConfigurationsRequest, ListPlaybackConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPlaybackConfigurationsCommandInput extends ListPlaybackConfigurationsRequest {
}
export interface ListPlaybackConfigurationsCommandOutput extends ListPlaybackConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPlaybackConfigurationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPlaybackConfigurationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListPlaybackConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaybackConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPlaybackConfigurationsCommand extends $Command<ListPlaybackConfigurationsCommandInput, ListPlaybackConfigurationsCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: ListPlaybackConfigurationsCommandInput;
    constructor(input: ListPlaybackConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlaybackConfigurationsCommandInput, ListPlaybackConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
