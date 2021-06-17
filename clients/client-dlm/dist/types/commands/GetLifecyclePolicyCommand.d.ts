import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyRequest {
}
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets detailed information about the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLifecyclePolicyCommand extends $Command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput, DLMClientResolvedConfig> {
    readonly input: GetLifecyclePolicyCommandInput;
    constructor(input: GetLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DLMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
