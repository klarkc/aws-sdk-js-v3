import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerRequest, GetCrawlerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCrawlerCommandInput extends GetCrawlerRequest {
}
export interface GetCrawlerCommandOutput extends GetCrawlerResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata for a specified crawler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlerCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCrawlerCommand extends $Command<GetCrawlerCommandInput, GetCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCrawlerCommandInput;
    constructor(input: GetCrawlerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCrawlerCommandInput, GetCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
