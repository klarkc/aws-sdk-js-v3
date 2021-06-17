import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateActionTargetRequest, UpdateActionTargetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateActionTargetCommandInput extends UpdateActionTargetRequest {
}
export interface UpdateActionTargetCommandOutput extends UpdateActionTargetResponse, __MetadataBearer {
}
/**
 * <p>Updates the name and description of a custom action target in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateActionTargetCommand extends $Command<UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: UpdateActionTargetCommandInput;
    constructor(input: UpdateActionTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput>;
    private serialize;
    private deserialize;
}
