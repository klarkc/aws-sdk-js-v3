import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteImageCommandInput extends BatchDeleteImageRequest {
}
export interface BatchDeleteImageCommandOutput extends BatchDeleteImageResponse, __MetadataBearer {
}
/**
 * <p>Deletes a list of specified images within a repository. Images are specified with
 *             either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *             you remove the last tag from an image, the image is deleted from your repository.</p>
 *         <p>You can completely delete an image (and all of its tags) by specifying the image's
 *             digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteImageCommand extends $Command<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchDeleteImageCommandInput;
    constructor(input: BatchDeleteImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput>;
    private serialize;
    private deserialize;
}
