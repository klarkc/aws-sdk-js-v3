import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchGetImageRequest, BatchGetImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetImageCommandInput extends BatchGetImageRequest {
}
export interface BatchGetImageCommandOutput extends BatchGetImageResponse, __MetadataBearer {
}
/**
 * <p>Gets detailed information for an image. Images are specified with either an
 *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
 *             manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetImageCommandInput} for command's `input` shape.
 * @see {@link BatchGetImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetImageCommand extends $Command<BatchGetImageCommandInput, BatchGetImageCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchGetImageCommandInput;
    constructor(input: BatchGetImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetImageCommandInput, BatchGetImageCommandOutput>;
    private serialize;
    private deserialize;
}
