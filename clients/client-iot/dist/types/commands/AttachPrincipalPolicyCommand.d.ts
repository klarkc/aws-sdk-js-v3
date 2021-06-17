import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AttachPrincipalPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachPrincipalPolicyCommandInput extends AttachPrincipalPolicyRequest {
}
export interface AttachPrincipalPolicyCommandOutput extends __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Attaches the specified policy to the specified principal (certificate or other
 *          credential).</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachPrincipalPolicyCommand extends $Command<AttachPrincipalPolicyCommandInput, AttachPrincipalPolicyCommandOutput, IoTClientResolvedConfig> {
    readonly input: AttachPrincipalPolicyCommandInput;
    constructor(input: AttachPrincipalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachPrincipalPolicyCommandInput, AttachPrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
