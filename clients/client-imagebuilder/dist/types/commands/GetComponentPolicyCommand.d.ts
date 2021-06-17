import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetComponentPolicyRequest, GetComponentPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComponentPolicyCommandInput extends GetComponentPolicyRequest {
}
export interface GetComponentPolicyCommandOutput extends GetComponentPolicyResponse, __MetadataBearer {
}
/**
 * <p> Gets a component policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetComponentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComponentPolicyCommand extends $Command<GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetComponentPolicyCommandInput;
    constructor(input: GetComponentPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
