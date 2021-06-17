import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemTemplatesRequest, SearchSystemTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchSystemTemplatesCommandInput extends SearchSystemTemplatesRequest {
}
export interface SearchSystemTemplatesCommandOutput extends SearchSystemTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchSystemTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSystemTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchSystemTemplatesCommand extends $Command<SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchSystemTemplatesCommandInput;
    constructor(input: SearchSystemTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
