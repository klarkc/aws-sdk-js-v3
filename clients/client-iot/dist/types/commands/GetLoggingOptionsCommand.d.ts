import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetLoggingOptionsRequest, GetLoggingOptionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoggingOptionsCommandInput extends GetLoggingOptionsRequest {
}
export interface GetLoggingOptionsCommandOutput extends GetLoggingOptionsResponse, __MetadataBearer {
}
/**
 * <p>Gets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
 *          instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoggingOptionsCommand extends $Command<GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetLoggingOptionsCommandInput;
    constructor(input: GetLoggingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
