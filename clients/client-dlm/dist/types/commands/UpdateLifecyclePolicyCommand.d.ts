import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {
}
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLifecyclePolicyCommand extends $Command<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput, DLMClientResolvedConfig> {
    readonly input: UpdateLifecyclePolicyCommandInput;
    constructor(input: UpdateLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DLMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
