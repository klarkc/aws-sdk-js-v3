import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerRequest, StopCrawlerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopCrawlerCommandInput extends StopCrawlerRequest {
}
export interface StopCrawlerCommandOutput extends StopCrawlerResponse, __MetadataBearer {
}
/**
 * <p>If the specified crawler is running, stops the crawl.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCrawlerCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopCrawlerCommand extends $Command<StopCrawlerCommandInput, StopCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopCrawlerCommandInput;
    constructor(input: StopCrawlerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCrawlerCommandInput, StopCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
