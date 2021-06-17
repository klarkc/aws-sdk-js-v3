import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIPSetsCommandInput extends ListIPSetsRequest {
}
export interface ListIPSetsCommandOutput extends ListIPSetsResponse, __MetadataBearer {
}
/**
 * <p>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
 *       operation from a member account, the IPSets returned are the IPSets from the associated administrator
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListIPSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListIPSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIPSetsCommand extends $Command<ListIPSetsCommandInput, ListIPSetsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: ListIPSetsCommandInput;
    constructor(input: ListIPSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIPSetsCommandInput, ListIPSetsCommandOutput>;
    private serialize;
    private deserialize;
}
