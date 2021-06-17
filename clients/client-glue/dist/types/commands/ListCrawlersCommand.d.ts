import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlersRequest, ListCrawlersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCrawlersCommandInput extends ListCrawlersRequest {
}
export interface ListCrawlersCommandOutput extends ListCrawlersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the names of all crawler resources in this AWS account, or the
 *       resources with the specified tag. This operation allows you to see which
 *       resources are available in your account, and their names.</p>
 *
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCrawlersCommandInput} for command's `input` shape.
 * @see {@link ListCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCrawlersCommand extends $Command<ListCrawlersCommandInput, ListCrawlersCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListCrawlersCommandInput;
    constructor(input: ListCrawlersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCrawlersCommandInput, ListCrawlersCommandOutput>;
    private serialize;
    private deserialize;
}
