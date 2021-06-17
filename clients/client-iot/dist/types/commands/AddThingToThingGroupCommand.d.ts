import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AddThingToThingGroupRequest, AddThingToThingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddThingToThingGroupCommandInput extends AddThingToThingGroupRequest {
}
export interface AddThingToThingGroupCommandOutput extends AddThingToThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Adds a thing to a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AddThingToThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddThingToThingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddThingToThingGroupCommand extends $Command<AddThingToThingGroupCommandInput, AddThingToThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: AddThingToThingGroupCommandInput;
    constructor(input: AddThingToThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddThingToThingGroupCommandInput, AddThingToThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
