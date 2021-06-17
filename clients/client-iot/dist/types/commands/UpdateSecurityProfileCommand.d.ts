import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateSecurityProfileRequest, UpdateSecurityProfileResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSecurityProfileCommandInput extends UpdateSecurityProfileRequest {
}
export interface UpdateSecurityProfileCommandOutput extends UpdateSecurityProfileResponse, __MetadataBearer {
}
/**
 * <p>Updates a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSecurityProfileCommand extends $Command<UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateSecurityProfileCommandInput;
    constructor(input: UpdateSecurityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
