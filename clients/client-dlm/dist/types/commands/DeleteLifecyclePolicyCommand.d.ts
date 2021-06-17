import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyRequest {
}
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified lifecycle policy and halts the automated operations that the
 * 			policy specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLifecyclePolicyCommand extends $Command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput, DLMClientResolvedConfig> {
    readonly input: DeleteLifecyclePolicyCommandInput;
    constructor(input: DeleteLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DLMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
