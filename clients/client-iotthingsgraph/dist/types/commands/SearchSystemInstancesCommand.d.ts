import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemInstancesRequest, SearchSystemInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchSystemInstancesCommandInput extends SearchSystemInstancesRequest {
}
export interface SearchSystemInstancesCommandOutput extends SearchSystemInstancesResponse, __MetadataBearer {
}
/**
 * <p>Searches for system instances in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemInstancesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemInstancesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchSystemInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSystemInstancesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemInstancesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchSystemInstancesCommand extends $Command<SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchSystemInstancesCommandInput;
    constructor(input: SearchSystemInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
