import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { PutLoggingOptionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLoggingOptionsCommandInput extends PutLoggingOptionsRequest {
}
export interface PutLoggingOptionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets or updates the AWS IoT Events logging options.</p>
 *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
 *       minute for the change to take effect. If you change the policy attached to the role you
 *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
 *       takes up to five minutes for that change to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, PutLoggingOptionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, PutLoggingOptionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new PutLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutLoggingOptionsCommand extends $Command<PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: PutLoggingOptionsCommandInput;
    constructor(input: PutLoggingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
