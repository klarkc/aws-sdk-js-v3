import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetV2LoggingOptionsRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetV2LoggingOptionsCommandInput extends SetV2LoggingOptionsRequest {
}
export interface SetV2LoggingOptionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the logging options for the V2 logging service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetV2LoggingOptionsCommand extends $Command<SetV2LoggingOptionsCommandInput, SetV2LoggingOptionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: SetV2LoggingOptionsCommandInput;
    constructor(input: SetV2LoggingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetV2LoggingOptionsCommandInput, SetV2LoggingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
