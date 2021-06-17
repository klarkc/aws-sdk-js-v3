import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetLifecyclePolicyPreviewRequest, GetLifecyclePolicyPreviewResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLifecyclePolicyPreviewCommandInput extends GetLifecyclePolicyPreviewRequest {
}
export interface GetLifecyclePolicyPreviewCommandOutput extends GetLifecyclePolicyPreviewResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the results of the lifecycle policy preview request for the specified
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLifecyclePolicyPreviewCommand extends $Command<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetLifecyclePolicyPreviewCommandInput;
    constructor(input: GetLifecyclePolicyPreviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
