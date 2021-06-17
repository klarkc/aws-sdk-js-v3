import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteLayerUploadCommandInput extends CompleteLayerUploadRequest {
}
export interface CompleteLayerUploadCommandOutput extends CompleteLayerUploadResponse, __MetadataBearer {
}
/**
 * <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry,
 *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
 *          the image layer for data validation purposes.</p>
 *          <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
 *          layer to verify that the upload has completed.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CompleteLayerUploadCommand extends $Command<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: CompleteLayerUploadCommandInput;
    constructor(input: CompleteLayerUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput>;
    private serialize;
    private deserialize;
}
