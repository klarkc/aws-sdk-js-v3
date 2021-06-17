import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ArchiveFindingsRequest, ArchiveFindingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ArchiveFindingsCommandInput extends ArchiveFindingsRequest {
}
export interface ArchiveFindingsCommandOutput extends ArchiveFindingsResponse, __MetadataBearer {
}
/**
 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
 *          <note>
 *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
 *         archive findings from their accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ArchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ArchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ArchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ArchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link ArchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ArchiveFindingsCommand extends $Command<ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: ArchiveFindingsCommandInput;
    constructor(input: ArchiveFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
