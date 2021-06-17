import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMemberDetectorsCommandInput extends UpdateMemberDetectorsRequest {
}
export interface UpdateMemberDetectorsCommandOutput extends UpdateMemberDetectorsResponse, __MetadataBearer {
}
/**
 * <p>Contains information on member accounts to be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMemberDetectorsCommand extends $Command<UpdateMemberDetectorsCommandInput, UpdateMemberDetectorsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UpdateMemberDetectorsCommandInput;
    constructor(input: UpdateMemberDetectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMemberDetectorsCommandInput, UpdateMemberDetectorsCommandOutput>;
    private serialize;
    private deserialize;
}
