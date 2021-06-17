import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateThreatIntelSetRequest, UpdateThreatIntelSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThreatIntelSetCommandInput extends UpdateThreatIntelSetRequest {
}
export interface UpdateThreatIntelSetCommandOutput extends UpdateThreatIntelSetResponse, __MetadataBearer {
}
/**
 * <p>Updates the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link UpdateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThreatIntelSetCommand extends $Command<UpdateThreatIntelSetCommandInput, UpdateThreatIntelSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UpdateThreatIntelSetCommandInput;
    constructor(input: UpdateThreatIntelSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThreatIntelSetCommandInput, UpdateThreatIntelSetCommandOutput>;
    private serialize;
    private deserialize;
}
