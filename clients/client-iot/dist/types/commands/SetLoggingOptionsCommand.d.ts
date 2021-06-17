import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetLoggingOptionsRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetLoggingOptionsCommandInput extends SetLoggingOptionsRequest {
}
export interface SetLoggingOptionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
 *          instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetLoggingOptionsCommand extends $Command<SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: SetLoggingOptionsCommandInput;
    constructor(input: SetLoggingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
