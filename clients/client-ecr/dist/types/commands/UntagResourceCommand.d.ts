import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagResourceCommandInput extends UntagResourceRequest {
}
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {
}
/**
 * <p>Deletes specified tags from a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UntagResourceCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UntagResourceCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagResourceCommand extends $Command<UntagResourceCommandInput, UntagResourceCommandOutput, ECRClientResolvedConfig> {
    readonly input: UntagResourceCommandInput;
    constructor(input: UntagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagResourceCommandInput, UntagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
