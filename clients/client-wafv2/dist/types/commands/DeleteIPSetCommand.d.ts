import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIPSetCommandInput extends DeleteIPSetRequest {
}
export interface DeleteIPSetCommandOutput extends DeleteIPSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified <a>IPSet</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIPSetCommandInput} for command's `input` shape.
 * @see {@link DeleteIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIPSetCommand extends $Command<DeleteIPSetCommandInput, DeleteIPSetCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteIPSetCommandInput;
    constructor(input: DeleteIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIPSetCommandInput, DeleteIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
