import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DisassociateDelegateFromResourceRequest, DisassociateDelegateFromResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateDelegateFromResourceCommandInput extends DisassociateDelegateFromResourceRequest {
}
export interface DisassociateDelegateFromResourceCommandOutput extends DisassociateDelegateFromResourceResponse, __MetadataBearer {
}
/**
 * <p>Removes a member from the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateDelegateFromResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateDelegateFromResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DisassociateDelegateFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDelegateFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDelegateFromResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDelegateFromResourceCommand extends $Command<DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DisassociateDelegateFromResourceCommandInput;
    constructor(input: DisassociateDelegateFromResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
