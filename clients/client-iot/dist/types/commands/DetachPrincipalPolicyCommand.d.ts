import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachPrincipalPolicyRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachPrincipalPolicyCommandInput extends DetachPrincipalPolicyRequest {
}
export interface DetachPrincipalPolicyCommandOutput extends __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Removes the specified policy from the specified certificate.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachPrincipalPolicyCommand extends $Command<DetachPrincipalPolicyCommandInput, DetachPrincipalPolicyCommandOutput, IoTClientResolvedConfig> {
    readonly input: DetachPrincipalPolicyCommandInput;
    constructor(input: DetachPrincipalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachPrincipalPolicyCommandInput, DetachPrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
