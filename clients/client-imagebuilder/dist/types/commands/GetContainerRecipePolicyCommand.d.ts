import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetContainerRecipePolicyRequest, GetContainerRecipePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerRecipePolicyCommandInput extends GetContainerRecipePolicyRequest {
}
export interface GetContainerRecipePolicyCommandOutput extends GetContainerRecipePolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the policy for a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerRecipePolicyCommand extends $Command<GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetContainerRecipePolicyCommandInput;
    constructor(input: GetContainerRecipePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
