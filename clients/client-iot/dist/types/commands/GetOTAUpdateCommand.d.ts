import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetOTAUpdateRequest, GetOTAUpdateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOTAUpdateCommandInput extends GetOTAUpdateRequest {
}
export interface GetOTAUpdateCommandOutput extends GetOTAUpdateResponse, __MetadataBearer {
}
/**
 * <p>Gets an OTA update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link GetOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOTAUpdateCommand extends $Command<GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetOTAUpdateCommandInput;
    constructor(input: GetOTAUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
