import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCrawlerCommandInput extends CreateCrawlerRequest {
}
export interface CreateCrawlerCommandOutput extends CreateCrawlerResponse, __MetadataBearer {
}
/**
 * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
 *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
 *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCrawlerCommandInput} for command's `input` shape.
 * @see {@link CreateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCrawlerCommand extends $Command<CreateCrawlerCommandInput, CreateCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateCrawlerCommandInput;
    constructor(input: CreateCrawlerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCrawlerCommandInput, CreateCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
