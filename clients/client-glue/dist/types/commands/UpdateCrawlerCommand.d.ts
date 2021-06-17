import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateCrawlerRequest, UpdateCrawlerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCrawlerCommandInput extends UpdateCrawlerRequest {
}
export interface UpdateCrawlerCommandOutput extends UpdateCrawlerResponse, __MetadataBearer {
}
/**
 * <p>Updates a crawler. If a crawler is
 *       running, you must stop it using <code>StopCrawler</code> before updating
 *       it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCrawlerCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCrawlerCommand extends $Command<UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateCrawlerCommandInput;
    constructor(input: UpdateCrawlerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
