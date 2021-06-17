import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateFindingsRequest, UpdateFindingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFindingsCommandInput extends UpdateFindingsRequest {
}
export interface UpdateFindingsCommandOutput extends UpdateFindingsResponse, __MetadataBearer {
}
/**
 * <p>
 *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
 *             <code>BatchUpdateFindings</code>.</p>
 *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
 *          findings that the filter attributes specify. Any member account that can view the finding
 *          also sees the update to the finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFindingsCommand extends $Command<UpdateFindingsCommandInput, UpdateFindingsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: UpdateFindingsCommandInput;
    constructor(input: UpdateFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFindingsCommandInput, UpdateFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
