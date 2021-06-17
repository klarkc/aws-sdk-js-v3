import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartCrawlerScheduleCommandInput extends StartCrawlerScheduleRequest {
}
export interface StartCrawlerScheduleCommandOutput extends StartCrawlerScheduleResponse, __MetadataBearer {
}
/**
 * <p>Changes the schedule state of the specified crawler to
 *       <code>SCHEDULED</code>, unless the crawler is already running or the
 *       schedule state is already <code>SCHEDULED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StartCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartCrawlerScheduleCommand extends $Command<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartCrawlerScheduleCommandInput;
    constructor(input: StartCrawlerScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
