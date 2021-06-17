import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowTemplatesRequest, SearchFlowTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchFlowTemplatesCommandInput extends SearchFlowTemplatesRequest {
}
export interface SearchFlowTemplatesCommandOutput extends SearchFlowTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Searches for summary information about workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchFlowTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFlowTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchFlowTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchFlowTemplatesCommand extends $Command<SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchFlowTemplatesCommandInput;
    constructor(input: SearchFlowTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
