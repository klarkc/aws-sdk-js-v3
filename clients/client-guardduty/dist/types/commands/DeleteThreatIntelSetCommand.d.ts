import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteThreatIntelSetRequest, DeleteThreatIntelSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThreatIntelSetCommandInput extends DeleteThreatIntelSetRequest {
}
export interface DeleteThreatIntelSetCommandOutput extends DeleteThreatIntelSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link DeleteThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThreatIntelSetCommand extends $Command<DeleteThreatIntelSetCommandInput, DeleteThreatIntelSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeleteThreatIntelSetCommandInput;
    constructor(input: DeleteThreatIntelSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThreatIntelSetCommandInput, DeleteThreatIntelSetCommandOutput>;
    private serialize;
    private deserialize;
}
