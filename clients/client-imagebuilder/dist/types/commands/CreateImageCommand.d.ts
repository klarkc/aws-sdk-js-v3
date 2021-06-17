import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateImageRequest, CreateImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateImageCommandInput extends CreateImageRequest {
}
export interface CreateImageCommandOutput extends CreateImageResponse, __MetadataBearer {
}
/**
 * <p> Creates a new image. This request will create a new image along with all of the
 *       configured output resources defined in the distribution configuration. You must specify
 *       exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImageCommand extends $Command<CreateImageCommandInput, CreateImageCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateImageCommandInput;
    constructor(input: CreateImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageCommandInput, CreateImageCommandOutput>;
    private serialize;
    private deserialize;
}
