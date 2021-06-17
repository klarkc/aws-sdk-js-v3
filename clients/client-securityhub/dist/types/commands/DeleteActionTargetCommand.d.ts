import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DeleteActionTargetRequest, DeleteActionTargetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteActionTargetCommandInput extends DeleteActionTargetRequest {
}
export interface DeleteActionTargetCommandOutput extends DeleteActionTargetResponse, __MetadataBearer {
}
/**
 * <p>Deletes a custom action target from Security Hub.</p>
 *          <p>Deleting a custom action target does not affect any findings or insights that were
 *          already sent to Amazon CloudWatch Events using the custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActionTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteActionTargetCommand extends $Command<DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DeleteActionTargetCommandInput;
    constructor(input: DeleteActionTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput>;
    private serialize;
    private deserialize;
}
