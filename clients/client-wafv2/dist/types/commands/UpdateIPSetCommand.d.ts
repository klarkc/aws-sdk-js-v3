import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIPSetCommandInput extends UpdateIPSetRequest {
}
export interface UpdateIPSetCommandOutput extends UpdateIPSetResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified <a>IPSet</a>. </p>
 *          <note>
 *             <p>This operation completely replaces any IP address specifications that you already have in the IP set with the ones that you provide to this call. If you want to add to or modify the addresses that are already in the IP set, retrieve those by calling <a>GetIPSet</a>, update them, and provide the complete updated array of IP addresses to this call.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIPSetCommand extends $Command<UpdateIPSetCommandInput, UpdateIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: UpdateIPSetCommandInput;
    constructor(input: UpdateIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
