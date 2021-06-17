import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingGroupsRequest, ListThingGroupsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingGroupsCommandInput extends ListThingGroupsRequest {
}
export interface ListThingGroupsCommandOutput extends ListThingGroupsResponse, __MetadataBearer {
}
/**
 * <p>List the thing groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingGroupsCommand extends $Command<ListThingGroupsCommandInput, ListThingGroupsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingGroupsCommandInput;
    constructor(input: ListThingGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingGroupsCommandInput, ListThingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
