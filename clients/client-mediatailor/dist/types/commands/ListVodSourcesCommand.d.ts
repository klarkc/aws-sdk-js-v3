import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListVodSourcesRequest, ListVodSourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVodSourcesCommandInput extends ListVodSourcesRequest {
}
export interface ListVodSourcesCommandOutput extends ListVodSourcesResponse, __MetadataBearer {
}
/**
 * <p>Lists all the VOD sources in a source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListVodSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListVodSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListVodSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVodSourcesCommandInput} for command's `input` shape.
 * @see {@link ListVodSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVodSourcesCommand extends $Command<ListVodSourcesCommandInput, ListVodSourcesCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: ListVodSourcesCommandInput;
    constructor(input: ListVodSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVodSourcesCommandInput, ListVodSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
