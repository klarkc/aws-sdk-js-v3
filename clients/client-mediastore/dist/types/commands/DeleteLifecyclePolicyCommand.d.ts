import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyInput {
}
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyOutput, __MetadataBearer {
}
/**
 * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLifecyclePolicyCommand extends $Command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteLifecyclePolicyCommandInput;
    constructor(input: DeleteLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
