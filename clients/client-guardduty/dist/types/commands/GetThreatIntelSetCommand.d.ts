import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetThreatIntelSetRequest, GetThreatIntelSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetThreatIntelSetCommandInput extends GetThreatIntelSetRequest {
}
export interface GetThreatIntelSetCommandOutput extends GetThreatIntelSetResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link GetThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetThreatIntelSetCommand extends $Command<GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: GetThreatIntelSetCommandInput;
    constructor(input: GetThreatIntelSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput>;
    private serialize;
    private deserialize;
}
