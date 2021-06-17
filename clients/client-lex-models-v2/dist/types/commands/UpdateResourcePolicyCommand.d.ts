import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateResourcePolicyRequest, UpdateResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourcePolicyCommandInput extends UpdateResourcePolicyRequest {
}
export interface UpdateResourcePolicyCommandOutput extends UpdateResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Replaces the existing resource policy for a bot or bot alias with a
 *          new one. If the policy doesn't exist, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourcePolicyCommand extends $Command<UpdateResourcePolicyCommandInput, UpdateResourcePolicyCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: UpdateResourcePolicyCommandInput;
    constructor(input: UpdateResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourcePolicyCommandInput, UpdateResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
