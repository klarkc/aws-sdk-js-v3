import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitiateLayerUploadCommandInput extends InitiateLayerUploadRequest {
}
export interface InitiateLayerUploadCommandOutput extends InitiateLayerUploadResponse, __MetadataBearer {
}
/**
 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
 *         <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer
 *             that has not already been uploaded. Whether or not an image layer has been uploaded is
 *             determined by the BatchCheckLayerAvailability API action.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitiateLayerUploadCommand extends $Command<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput, ECRClientResolvedConfig> {
    readonly input: InitiateLayerUploadCommandInput;
    constructor(input: InitiateLayerUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput>;
    private serialize;
    private deserialize;
}
