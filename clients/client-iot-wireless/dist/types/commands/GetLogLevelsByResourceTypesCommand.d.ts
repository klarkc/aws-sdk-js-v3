import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLogLevelsByResourceTypesCommandInput extends GetLogLevelsByResourceTypesRequest {
}
export interface GetLogLevelsByResourceTypesCommandOutput extends GetLogLevelsByResourceTypesResponse, __MetadataBearer {
}
/**
 * <p>Returns current default log-levels, or log levels by resource types, could be for wireless device log options or wireless gateway log options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLogLevelsByResourceTypesCommand extends $Command<GetLogLevelsByResourceTypesCommandInput, GetLogLevelsByResourceTypesCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetLogLevelsByResourceTypesCommandInput;
    constructor(input: GetLogLevelsByResourceTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogLevelsByResourceTypesCommandInput, GetLogLevelsByResourceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
