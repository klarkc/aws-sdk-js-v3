import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RevokeIpRulesRequest, RevokeIpRulesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeIpRulesCommandInput extends RevokeIpRulesRequest {
}
export interface RevokeIpRulesCommandOutput extends RevokeIpRulesResult, __MetadataBearer {
}
/**
 * <p>Removes one or more rules from the specified IP access control group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RevokeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RevokeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RevokeIpRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeIpRulesCommandInput} for command's `input` shape.
 * @see {@link RevokeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeIpRulesCommand extends $Command<RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RevokeIpRulesCommandInput;
    constructor(input: RevokeIpRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput>;
    private serialize;
    private deserialize;
}
