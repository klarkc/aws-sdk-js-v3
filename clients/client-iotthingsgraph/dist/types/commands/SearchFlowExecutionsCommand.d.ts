import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowExecutionsRequest, SearchFlowExecutionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchFlowExecutionsCommandInput extends SearchFlowExecutionsRequest {
}
export interface SearchFlowExecutionsCommandOutput extends SearchFlowExecutionsResponse, __MetadataBearer {
}
/**
 * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowExecutionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowExecutionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link SearchFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchFlowExecutionsCommand extends $Command<SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchFlowExecutionsCommandInput;
    constructor(input: SearchFlowExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
