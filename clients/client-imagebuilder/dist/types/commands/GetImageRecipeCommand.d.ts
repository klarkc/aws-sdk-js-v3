import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRecipeRequest, GetImageRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImageRecipeCommandInput extends GetImageRecipeRequest {
}
export interface GetImageRecipeCommandOutput extends GetImageRecipeResponse, __MetadataBearer {
}
/**
 * <p> Gets an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageRecipeCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImageRecipeCommand extends $Command<GetImageRecipeCommandInput, GetImageRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetImageRecipeCommandInput;
    constructor(input: GetImageRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImageRecipeCommandInput, GetImageRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
