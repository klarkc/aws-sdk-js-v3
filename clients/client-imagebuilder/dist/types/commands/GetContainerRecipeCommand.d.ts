import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetContainerRecipeRequest, GetContainerRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerRecipeCommandInput extends GetContainerRecipeRequest {
}
export interface GetContainerRecipeCommandOutput extends GetContainerRecipeResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerRecipeCommand extends $Command<GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetContainerRecipeCommandInput;
    constructor(input: GetContainerRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
