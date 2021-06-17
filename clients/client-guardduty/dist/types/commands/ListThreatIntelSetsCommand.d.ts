import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListThreatIntelSetsRequest, ListThreatIntelSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThreatIntelSetsCommandInput extends ListThreatIntelSetsRequest {
}
export interface ListThreatIntelSetsCommandOutput extends ListThreatIntelSetsResponse, __MetadataBearer {
}
/**
 * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
 *       use this operation from a member account, the ThreatIntelSets associated with the administrator
 *       account are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListThreatIntelSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListThreatIntelSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListThreatIntelSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThreatIntelSetsCommandInput} for command's `input` shape.
 * @see {@link ListThreatIntelSetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThreatIntelSetsCommand extends $Command<ListThreatIntelSetsCommandInput, ListThreatIntelSetsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: ListThreatIntelSetsCommandInput;
    constructor(input: ListThreatIntelSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThreatIntelSetsCommandInput, ListThreatIntelSetsCommandOutput>;
    private serialize;
    private deserialize;
}
