import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWebACLCommandInput extends DeleteWebACLRequest {
}
export interface DeleteWebACLCommandOutput extends DeleteWebACLResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified <a>WebACL</a>.</p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebACLCommandInput} for command's `input` shape.
 * @see {@link DeleteWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWebACLCommand extends $Command<DeleteWebACLCommandInput, DeleteWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteWebACLCommandInput;
    constructor(input: DeleteWebACLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebACLCommandInput, DeleteWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
