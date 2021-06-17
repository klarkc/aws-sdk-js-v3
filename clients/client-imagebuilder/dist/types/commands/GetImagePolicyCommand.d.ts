import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImagePolicyRequest, GetImagePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImagePolicyCommandInput extends GetImagePolicyRequest {
}
export interface GetImagePolicyCommandOutput extends GetImagePolicyResponse, __MetadataBearer {
}
/**
 * <p> Gets an image policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImagePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImagePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImagePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImagePolicyCommand extends $Command<GetImagePolicyCommandInput, GetImagePolicyCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetImagePolicyCommandInput;
    constructor(input: GetImagePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImagePolicyCommandInput, GetImagePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
