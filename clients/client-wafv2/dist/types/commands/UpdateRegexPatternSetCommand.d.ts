import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { UpdateRegexPatternSetRequest, UpdateRegexPatternSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRegexPatternSetCommandInput extends UpdateRegexPatternSetRequest {
}
export interface UpdateRegexPatternSetCommandOutput extends UpdateRegexPatternSetResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified <a>RegexPatternSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRegexPatternSetCommand extends $Command<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: UpdateRegexPatternSetCommandInput;
    constructor(input: UpdateRegexPatternSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
