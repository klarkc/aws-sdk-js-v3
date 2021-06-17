import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeprecateThingTypeRequest, DeprecateThingTypeResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeprecateThingTypeCommandInput extends DeprecateThingTypeRequest {
}
export interface DeprecateThingTypeCommandOutput extends DeprecateThingTypeResponse, __MetadataBearer {
}
/**
 * <p>Deprecates a thing type. You can not associate new things with deprecated thing
 * 			type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeprecateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeprecateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeprecateThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeprecateThingTypeCommand extends $Command<DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeprecateThingTypeCommandInput;
    constructor(input: DeprecateThingTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput>;
    private serialize;
    private deserialize;
}
