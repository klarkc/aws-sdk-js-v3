import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingTypeRequest, CreateThingTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateThingTypeCommandInput extends CreateThingTypeRequest {
}
export interface CreateThingTypeCommandOutput extends CreateThingTypeResponse, __MetadataBearer {
}
/**
 * <p>Creates a new thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThingTypeCommandInput} for command's `input` shape.
 * @see {@link CreateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateThingTypeCommand extends $Command<CreateThingTypeCommandInput, CreateThingTypeCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateThingTypeCommandInput;
    constructor(input: CreateThingTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateThingTypeCommandInput, CreateThingTypeCommandOutput>;
    private serialize;
    private deserialize;
}
