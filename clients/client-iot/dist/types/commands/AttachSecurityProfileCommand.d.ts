import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AttachSecurityProfileRequest, AttachSecurityProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachSecurityProfileCommandInput extends AttachSecurityProfileRequest {
}
export interface AttachSecurityProfileCommandOutput extends AttachSecurityProfileResponse, __MetadataBearer {
}
/**
 * <p>Associates a Device Defender security profile with a thing group or this account. Each
 *         thing group or account can have up to five security profiles associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link AttachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachSecurityProfileCommand extends $Command<AttachSecurityProfileCommandInput, AttachSecurityProfileCommandOutput, IoTClientResolvedConfig> {
    readonly input: AttachSecurityProfileCommandInput;
    constructor(input: AttachSecurityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachSecurityProfileCommandInput, AttachSecurityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
