import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateDynamicThingGroupRequest, CreateDynamicThingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDynamicThingGroupCommandInput extends CreateDynamicThingGroupRequest {
}
export interface CreateDynamicThingGroupCommandOutput extends CreateDynamicThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDynamicThingGroupCommand extends $Command<CreateDynamicThingGroupCommandInput, CreateDynamicThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateDynamicThingGroupCommandInput;
    constructor(input: CreateDynamicThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDynamicThingGroupCommandInput, CreateDynamicThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
