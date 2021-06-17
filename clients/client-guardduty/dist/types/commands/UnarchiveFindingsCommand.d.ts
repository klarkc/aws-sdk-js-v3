import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UnarchiveFindingsRequest, UnarchiveFindingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnarchiveFindingsCommandInput extends UnarchiveFindingsRequest {
}
export interface UnarchiveFindingsCommandOutput extends UnarchiveFindingsResponse, __MetadataBearer {
}
/**
 * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UnarchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UnarchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UnarchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnarchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link UnarchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnarchiveFindingsCommand extends $Command<UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UnarchiveFindingsCommandInput;
    constructor(input: UnarchiveFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
