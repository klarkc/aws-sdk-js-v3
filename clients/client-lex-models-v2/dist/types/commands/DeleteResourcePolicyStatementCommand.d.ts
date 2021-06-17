import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteResourcePolicyStatementRequest, DeleteResourcePolicyStatementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourcePolicyStatementCommandInput extends DeleteResourcePolicyStatementRequest {
}
export interface DeleteResourcePolicyStatementCommandOutput extends DeleteResourcePolicyStatementResponse, __MetadataBearer {
}
/**
 * <p>Deletes a policy statement from a resource policy. If you delete the
 *          last statement from a policy, the policy is deleted. If you specify a
 *          statement ID that doesn't exist in the policy, or if the bot or bot
 *          alias doesn't have a policy attached, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourcePolicyStatementCommand extends $Command<DeleteResourcePolicyStatementCommandInput, DeleteResourcePolicyStatementCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: DeleteResourcePolicyStatementCommandInput;
    constructor(input: DeleteResourcePolicyStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourcePolicyStatementCommandInput, DeleteResourcePolicyStatementCommandOutput>;
    private serialize;
    private deserialize;
}
