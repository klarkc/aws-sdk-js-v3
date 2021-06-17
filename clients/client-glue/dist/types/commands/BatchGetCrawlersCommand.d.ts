import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetCrawlersRequest, BatchGetCrawlersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetCrawlersCommandInput extends BatchGetCrawlersRequest {
}
export interface BatchGetCrawlersCommandOutput extends BatchGetCrawlersResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetCrawlersCommandInput} for command's `input` shape.
 * @see {@link BatchGetCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetCrawlersCommand extends $Command<BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetCrawlersCommandInput;
    constructor(input: BatchGetCrawlersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput>;
    private serialize;
    private deserialize;
}
