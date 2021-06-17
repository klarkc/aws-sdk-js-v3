import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCrawlerMetricsCommandInput extends GetCrawlerMetricsRequest {
}
export interface GetCrawlerMetricsCommandOutput extends GetCrawlerMetricsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metrics about specified crawlers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerMetricsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerMetricsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlerMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlerMetricsCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerMetricsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCrawlerMetricsCommand extends $Command<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCrawlerMetricsCommandInput;
    constructor(input: GetCrawlerMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
