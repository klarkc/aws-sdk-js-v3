import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateResourcePolicyRequest, CreateResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourcePolicyCommandInput extends CreateResourcePolicyRequest {
}
export interface CreateResourcePolicyCommandOutput extends CreateResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new resource policy with the specified policy
 *          statements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourcePolicyCommand extends $Command<CreateResourcePolicyCommandInput, CreateResourcePolicyCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateResourcePolicyCommandInput;
    constructor(input: CreateResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourcePolicyCommandInput, CreateResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
