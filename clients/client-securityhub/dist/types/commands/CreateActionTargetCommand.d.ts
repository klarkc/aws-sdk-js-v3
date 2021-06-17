import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { CreateActionTargetRequest, CreateActionTargetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateActionTargetCommandInput extends CreateActionTargetRequest {
}
export interface CreateActionTargetCommandOutput extends CreateActionTargetResponse, __MetadataBearer {
}
/**
 * <p>Creates a custom action target in Security Hub.</p>
 *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
 *          in Amazon CloudWatch Events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateActionTargetCommand extends $Command<CreateActionTargetCommandInput, CreateActionTargetCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: CreateActionTargetCommandInput;
    constructor(input: CreateActionTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateActionTargetCommandInput, CreateActionTargetCommandOutput>;
    private serialize;
    private deserialize;
}
