import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachSecurityProfileRequest, DetachSecurityProfileResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachSecurityProfileCommandInput extends DetachSecurityProfileRequest {
}
export interface DetachSecurityProfileCommandOutput extends DetachSecurityProfileResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DetachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachSecurityProfileCommand extends $Command<DetachSecurityProfileCommandInput, DetachSecurityProfileCommandOutput, IoTClientResolvedConfig> {
    readonly input: DetachSecurityProfileCommandInput;
    constructor(input: DetachSecurityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachSecurityProfileCommandInput, DetachSecurityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
