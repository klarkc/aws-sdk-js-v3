import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageTagMutabilityRequest, PutImageTagMutabilityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutImageTagMutabilityCommandInput extends PutImageTagMutabilityRequest {
}
export interface PutImageTagMutabilityCommandOutput extends PutImageTagMutabilityResponse, __MetadataBearer {
}
/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
 *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageTagMutabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageTagMutabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageTagMutabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageTagMutabilityCommandInput} for command's `input` shape.
 * @see {@link PutImageTagMutabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutImageTagMutabilityCommand extends $Command<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutImageTagMutabilityCommandInput;
    constructor(input: PutImageTagMutabilityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput>;
    private serialize;
    private deserialize;
}
