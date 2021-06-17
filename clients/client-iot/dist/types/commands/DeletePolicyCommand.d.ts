import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeletePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePolicyCommandInput extends DeletePolicyRequest {
}
export interface DeletePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified policy.</p>
 *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
 *          certificate.</p>
 *          <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default
 *          versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any
 *          certificate; and then use the DeletePolicy API to delete the policy.</p>
 *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
 *          it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePolicyCommand extends $Command<DeletePolicyCommandInput, DeletePolicyCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeletePolicyCommandInput;
    constructor(input: DeletePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
