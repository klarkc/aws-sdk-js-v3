import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateThreatIntelSetRequest, CreateThreatIntelSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateThreatIntelSetCommandInput extends CreateThreatIntelSetRequest {
}
export interface CreateThreatIntelSetCommandOutput extends CreateThreatIntelSetResponse, __MetadataBearer {
}
/**
 * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
 *       use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateThreatIntelSetCommand extends $Command<CreateThreatIntelSetCommandInput, CreateThreatIntelSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: CreateThreatIntelSetCommandInput;
    constructor(input: CreateThreatIntelSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateThreatIntelSetCommandInput, CreateThreatIntelSetCommandOutput>;
    private serialize;
    private deserialize;
}
