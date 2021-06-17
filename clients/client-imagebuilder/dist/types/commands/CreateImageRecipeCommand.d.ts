import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateImageRecipeRequest, CreateImageRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateImageRecipeCommandInput extends CreateImageRecipeRequest {
}
export interface CreateImageRecipeCommandOutput extends CreateImageRecipeResponse, __MetadataBearer {
}
/**
 * <p> Creates a new image recipe. Image recipes define how images are configured, tested, and
 *       assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImageRecipeCommand extends $Command<CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateImageRecipeCommandInput;
    constructor(input: CreateImageRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
