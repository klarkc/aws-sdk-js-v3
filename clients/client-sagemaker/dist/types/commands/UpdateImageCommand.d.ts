import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateImageRequest, UpdateImageResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateImageCommandInput extends UpdateImageRequest {
}
export interface UpdateImageCommandOutput extends UpdateImageResponse, __MetadataBearer {
}
/**
 * <p>Updates the properties of a SageMaker image. To change the image's tags, use the
 *         <a>AddTags</a> and <a>DeleteTags</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImageCommandInput} for command's `input` shape.
 * @see {@link UpdateImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateImageCommand extends $Command<UpdateImageCommandInput, UpdateImageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateImageCommandInput;
    constructor(input: UpdateImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateImageCommandInput, UpdateImageCommandOutput>;
    private serialize;
    private deserialize;
}
