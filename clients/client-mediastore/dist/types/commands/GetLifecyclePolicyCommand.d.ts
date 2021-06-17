import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetLifecyclePolicyInput, GetLifecyclePolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyInput {
}
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the object lifecycle policy that is assigned to a container.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLifecyclePolicyCommand extends $Command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetLifecyclePolicyCommandInput;
    constructor(input: GetLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
