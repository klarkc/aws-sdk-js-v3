import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIPSetCommandInput extends DeleteIPSetRequest {
}
export interface DeleteIPSetCommandOutput extends DeleteIPSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP
 *       lists in the console user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIPSetCommandInput} for command's `input` shape.
 * @see {@link DeleteIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIPSetCommand extends $Command<DeleteIPSetCommandInput, DeleteIPSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeleteIPSetCommandInput;
    constructor(input: DeleteIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIPSetCommandInput, DeleteIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
