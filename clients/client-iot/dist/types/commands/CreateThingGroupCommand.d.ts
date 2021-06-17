import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingGroupRequest, CreateThingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateThingGroupCommandInput extends CreateThingGroupRequest {
}
export interface CreateThingGroupCommandOutput extends CreateThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Create a thing group.</p>
 * 		       <note>
 * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateThingGroupCommand extends $Command<CreateThingGroupCommandInput, CreateThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateThingGroupCommandInput;
    constructor(input: CreateThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateThingGroupCommandInput, CreateThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
