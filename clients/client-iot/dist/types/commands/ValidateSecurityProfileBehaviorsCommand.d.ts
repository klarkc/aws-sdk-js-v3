import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ValidateSecurityProfileBehaviorsCommandInput extends ValidateSecurityProfileBehaviorsRequest {
}
export interface ValidateSecurityProfileBehaviorsCommandOutput extends ValidateSecurityProfileBehaviorsResponse, __MetadataBearer {
}
/**
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ValidateSecurityProfileBehaviorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateSecurityProfileBehaviorsCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityProfileBehaviorsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ValidateSecurityProfileBehaviorsCommand extends $Command<ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ValidateSecurityProfileBehaviorsCommandInput;
    constructor(input: ValidateSecurityProfileBehaviorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput>;
    private serialize;
    private deserialize;
}
