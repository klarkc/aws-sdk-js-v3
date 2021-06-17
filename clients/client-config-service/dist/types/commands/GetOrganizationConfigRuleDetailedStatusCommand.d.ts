import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetOrganizationConfigRuleDetailedStatusRequest, GetOrganizationConfigRuleDetailedStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOrganizationConfigRuleDetailedStatusCommandInput extends GetOrganizationConfigRuleDetailedStatusRequest {
}
export interface GetOrganizationConfigRuleDetailedStatusCommandOutput extends GetOrganizationConfigRuleDetailedStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetOrganizationConfigRuleDetailedStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOrganizationConfigRuleDetailedStatusCommand extends $Command<GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetOrganizationConfigRuleDetailedStatusCommandInput;
    constructor(input: GetOrganizationConfigRuleDetailedStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput>;
    private serialize;
    private deserialize;
}
