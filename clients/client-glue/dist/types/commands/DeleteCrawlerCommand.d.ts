import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCrawlerRequest, DeleteCrawlerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCrawlerCommandInput extends DeleteCrawlerRequest {
}
export interface DeleteCrawlerCommandOutput extends DeleteCrawlerResponse, __MetadataBearer {
}
/**
 * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is
 *         <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCrawlerCommandInput} for command's `input` shape.
 * @see {@link DeleteCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCrawlerCommand extends $Command<DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteCrawlerCommandInput;
    constructor(input: DeleteCrawlerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
