import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SearchIndexRequest, SearchIndexResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchIndexCommandInput extends SearchIndexRequest {
}
export interface SearchIndexCommandOutput extends SearchIndexResponse, __MetadataBearer {
}
/**
 * <p>The query search index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SearchIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SearchIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SearchIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchIndexCommandInput} for command's `input` shape.
 * @see {@link SearchIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchIndexCommand extends $Command<SearchIndexCommandInput, SearchIndexCommandOutput, IoTClientResolvedConfig> {
    readonly input: SearchIndexCommandInput;
    constructor(input: SearchIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchIndexCommandInput, SearchIndexCommandOutput>;
    private serialize;
    private deserialize;
}
