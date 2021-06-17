import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateOTAUpdateRequest, CreateOTAUpdateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOTAUpdateCommandInput extends CreateOTAUpdateRequest {
}
export interface CreateOTAUpdateCommandOutput extends CreateOTAUpdateResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS IoT OTAUpdate on a target group of things or groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link CreateOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOTAUpdateCommand extends $Command<CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateOTAUpdateCommandInput;
    constructor(input: CreateOTAUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
