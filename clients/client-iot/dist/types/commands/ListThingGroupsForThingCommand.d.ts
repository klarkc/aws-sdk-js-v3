import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingGroupsForThingRequest, ListThingGroupsForThingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingGroupsForThingCommandInput extends ListThingGroupsForThingRequest {
}
export interface ListThingGroupsForThingCommandOutput extends ListThingGroupsForThingResponse, __MetadataBearer {
}
/**
 * <p>List the thing groups to which the specified thing belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingGroupsForThingCommand extends $Command<ListThingGroupsForThingCommandInput, ListThingGroupsForThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingGroupsForThingCommandInput;
    constructor(input: ListThingGroupsForThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingGroupsForThingCommandInput, ListThingGroupsForThingCommandOutput>;
    private serialize;
    private deserialize;
}
