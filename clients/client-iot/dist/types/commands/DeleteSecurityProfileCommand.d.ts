import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteSecurityProfileRequest, DeleteSecurityProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSecurityProfileCommandInput extends DeleteSecurityProfileRequest {
}
export interface DeleteSecurityProfileCommandOutput extends DeleteSecurityProfileResponse, __MetadataBearer {
}
/**
 * <p>Deletes a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSecurityProfileCommand extends $Command<DeleteSecurityProfileCommandInput, DeleteSecurityProfileCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteSecurityProfileCommandInput;
    constructor(input: DeleteSecurityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityProfileCommandInput, DeleteSecurityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
