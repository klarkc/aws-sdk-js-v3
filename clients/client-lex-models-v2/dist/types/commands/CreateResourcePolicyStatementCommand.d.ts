import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateResourcePolicyStatementRequest, CreateResourcePolicyStatementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourcePolicyStatementCommandInput extends CreateResourcePolicyStatementRequest {
}
export interface CreateResourcePolicyStatementCommandOutput extends CreateResourcePolicyStatementResponse, __MetadataBearer {
}
/**
 * <p>Adds a new resource policy statement to a bot or bot alias. If a
 *          resource policy exists, the statement is added to the current resource
 *          policy. If a policy doesn't exist, a new policy is created.</p>
 *          <p>You can create a resource policy statement that allows cross-account
 *          access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourcePolicyStatementCommand extends $Command<CreateResourcePolicyStatementCommandInput, CreateResourcePolicyStatementCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateResourcePolicyStatementCommandInput;
    constructor(input: CreateResourcePolicyStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourcePolicyStatementCommandInput, CreateResourcePolicyStatementCommandOutput>;
    private serialize;
    private deserialize;
}
