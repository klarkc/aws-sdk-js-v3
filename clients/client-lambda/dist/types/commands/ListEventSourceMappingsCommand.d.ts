import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventSourceMappingsCommandInput extends ListEventSourceMappingsRequest {
}
export interface ListEventSourceMappingsCommandOutput extends ListEventSourceMappingsResponse, __MetadataBearer {
}
/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventSourceMappingsCommand extends $Command<ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListEventSourceMappingsCommandInput;
    constructor(input: ListEventSourceMappingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput>;
    private serialize;
    private deserialize;
}
