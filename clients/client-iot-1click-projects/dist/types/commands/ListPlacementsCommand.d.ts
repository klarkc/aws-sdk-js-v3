import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { ListPlacementsRequest, ListPlacementsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPlacementsCommandInput extends ListPlacementsRequest {
}
export interface ListPlacementsCommandOutput extends ListPlacementsResponse, __MetadataBearer {
}
/**
 * <p>Lists the placement(s) of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListPlacementsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListPlacementsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new ListPlacementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlacementsCommandInput} for command's `input` shape.
 * @see {@link ListPlacementsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPlacementsCommand extends $Command<ListPlacementsCommandInput, ListPlacementsCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: ListPlacementsCommandInput;
    constructor(input: ListPlacementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlacementsCommandInput, ListPlacementsCommandOutput>;
    private serialize;
    private deserialize;
}
