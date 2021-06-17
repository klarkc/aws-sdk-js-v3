import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePolicyCommandInput extends CreatePolicyRequest {
}
export interface CreatePolicyCommandOutput extends CreatePolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS IoT policy.</p>
 *          <p>The created policy is the default version for the policy. This operation creates a
 *          policy version with a version identifier of <b>1</b> and sets
 *             <b>1</b> as the policy's default version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePolicyCommand extends $Command<CreatePolicyCommandInput, CreatePolicyCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreatePolicyCommandInput;
    constructor(input: CreatePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePolicyCommandInput, CreatePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
