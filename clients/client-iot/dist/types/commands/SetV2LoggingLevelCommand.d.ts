import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetV2LoggingLevelRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetV2LoggingLevelCommandInput extends SetV2LoggingLevelRequest {
}
export interface SetV2LoggingLevelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the logging level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetV2LoggingLevelCommand extends $Command<SetV2LoggingLevelCommandInput, SetV2LoggingLevelCommandOutput, IoTClientResolvedConfig> {
    readonly input: SetV2LoggingLevelCommandInput;
    constructor(input: SetV2LoggingLevelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetV2LoggingLevelCommandInput, SetV2LoggingLevelCommandOutput>;
    private serialize;
    private deserialize;
}
