import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetWebACLRequest, GetWebACLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWebACLCommandInput extends GetWebACLRequest {
}
export interface GetWebACLCommandOutput extends GetWebACLResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the specified <a>WebACL</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebACLCommandInput} for command's `input` shape.
 * @see {@link GetWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWebACLCommand extends $Command<GetWebACLCommandInput, GetWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetWebACLCommandInput;
    constructor(input: GetWebACLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWebACLCommandInput, GetWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
