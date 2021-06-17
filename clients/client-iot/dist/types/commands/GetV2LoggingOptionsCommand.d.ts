import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetV2LoggingOptionsRequest, GetV2LoggingOptionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetV2LoggingOptionsCommandInput extends GetV2LoggingOptionsRequest {
}
export interface GetV2LoggingOptionsCommandOutput extends GetV2LoggingOptionsResponse, __MetadataBearer {
}
/**
 * <p>Gets the fine grained logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetV2LoggingOptionsCommand extends $Command<GetV2LoggingOptionsCommandInput, GetV2LoggingOptionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetV2LoggingOptionsCommandInput;
    constructor(input: GetV2LoggingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetV2LoggingOptionsCommandInput, GetV2LoggingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
