import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteThingGroupRequest, DeleteThingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThingGroupCommandInput extends DeleteThingGroupRequest {
}
export interface DeleteThingGroupCommandOutput extends DeleteThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThingGroupCommand extends $Command<DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteThingGroupCommandInput;
    constructor(input: DeleteThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
