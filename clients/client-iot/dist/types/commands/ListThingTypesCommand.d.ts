import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingTypesRequest, ListThingTypesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingTypesCommandInput extends ListThingTypesRequest {
}
export interface ListThingTypesCommandOutput extends ListThingTypesResponse, __MetadataBearer {
}
/**
 * <p>Lists the existing thing types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingTypesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingTypesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingTypesCommandInput} for command's `input` shape.
 * @see {@link ListThingTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingTypesCommand extends $Command<ListThingTypesCommandInput, ListThingTypesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingTypesCommandInput;
    constructor(input: ListThingTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingTypesCommandInput, ListThingTypesCommandOutput>;
    private serialize;
    private deserialize;
}
