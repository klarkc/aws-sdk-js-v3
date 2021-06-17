import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDynamicThingGroupRequest, DeleteDynamicThingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDynamicThingGroupCommandInput extends DeleteDynamicThingGroupRequest {
}
export interface DeleteDynamicThingGroupCommandOutput extends DeleteDynamicThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDynamicThingGroupCommand extends $Command<DeleteDynamicThingGroupCommandInput, DeleteDynamicThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteDynamicThingGroupCommandInput;
    constructor(input: DeleteDynamicThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDynamicThingGroupCommandInput, DeleteDynamicThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
