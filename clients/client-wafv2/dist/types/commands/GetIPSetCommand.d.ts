import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIPSetCommandInput extends GetIPSetRequest {
}
export interface GetIPSetCommandOutput extends GetIPSetResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the specified <a>IPSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIPSetCommand extends $Command<GetIPSetCommandInput, GetIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetIPSetCommandInput;
    constructor(input: GetIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIPSetCommandInput, GetIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
