import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateContainerRecipeRequest, CreateContainerRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContainerRecipeCommandInput extends CreateContainerRecipeRequest {
}
export interface CreateContainerRecipeCommandOutput extends CreateContainerRecipeResponse, __MetadataBearer {
}
/**
 * <p>Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContainerRecipeCommand extends $Command<CreateContainerRecipeCommandInput, CreateContainerRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateContainerRecipeCommandInput;
    constructor(input: CreateContainerRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContainerRecipeCommandInput, CreateContainerRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
