import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDownloadUrlForLayerCommandInput extends GetDownloadUrlForLayerRequest {
}
export interface GetDownloadUrlForLayerCommandOutput extends GetDownloadUrlForLayerResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You
 *             can only get URLs for image layers that are referenced in an image.</p>
 *         <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDownloadUrlForLayerCommand extends $Command<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetDownloadUrlForLayerCommandInput;
    constructor(input: GetDownloadUrlForLayerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput>;
    private serialize;
    private deserialize;
}
