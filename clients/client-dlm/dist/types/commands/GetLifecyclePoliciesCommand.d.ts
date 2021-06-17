import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLifecyclePoliciesCommandInput extends GetLifecyclePoliciesRequest {
}
export interface GetLifecyclePoliciesCommandOutput extends GetLifecyclePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLifecyclePoliciesCommand extends $Command<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput, DLMClientResolvedConfig> {
    readonly input: GetLifecyclePoliciesCommandInput;
    constructor(input: GetLifecyclePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DLMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
