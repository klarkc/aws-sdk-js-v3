import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UploadLayerPartCommandInput extends UploadLayerPartRequest {
}
export interface UploadLayerPartCommandOutput extends UploadLayerPartResponse, __MetadataBearer {
}
/**
 * <p>Uploads an image layer part to Amazon ECR.</p>
 *          <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of
 *          each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is
 *          called once per each new image layer part.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, UploadLayerPartCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, UploadLayerPartCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new UploadLayerPartCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadLayerPartCommandInput} for command's `input` shape.
 * @see {@link UploadLayerPartCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UploadLayerPartCommand extends $Command<UploadLayerPartCommandInput, UploadLayerPartCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: UploadLayerPartCommandInput;
    constructor(input: UploadLayerPartCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadLayerPartCommandInput, UploadLayerPartCommandOutput>;
    private serialize;
    private deserialize;
}
