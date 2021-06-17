import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetWebACLForResourceRequest, GetWebACLForResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWebACLForResourceCommandInput extends GetWebACLForResourceRequest {
}
export interface GetWebACLForResourceCommandOutput extends GetWebACLForResourceResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetWebACLForResourceCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetWebACLForResourceCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetWebACLForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebACLForResourceCommandInput} for command's `input` shape.
 * @see {@link GetWebACLForResourceCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWebACLForResourceCommand extends $Command<GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetWebACLForResourceCommandInput;
    constructor(input: GetWebACLForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
