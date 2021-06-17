import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateMemberSessionRequest, UpdateMemberSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMemberSessionCommandInput extends UpdateMemberSessionRequest {
}
export interface UpdateMemberSessionCommandOutput extends UpdateMemberSessionResponse, __MetadataBearer {
}
/**
 * <p>Enables an Amazon Macie administrator to suspend or re-enable a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateMemberSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateMemberSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateMemberSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMemberSessionCommand extends $Command<UpdateMemberSessionCommandInput, UpdateMemberSessionCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: UpdateMemberSessionCommandInput;
    constructor(input: UpdateMemberSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMemberSessionCommandInput, UpdateMemberSessionCommandOutput>;
    private serialize;
    private deserialize;
}
