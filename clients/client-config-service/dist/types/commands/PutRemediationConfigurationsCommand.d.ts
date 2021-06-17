import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRemediationConfigurationsRequest, PutRemediationConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRemediationConfigurationsCommandInput extends PutRemediationConfigurationsRequest {
}
export interface PutRemediationConfigurationsCommandOutput extends PutRemediationConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Adds or updates the remediation configuration with a specific AWS Config rule with the
 * 			selected target or action.
 * 			The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule.
 * 		The AWS Config rule must already exist for you to add a remediation configuration.
 * 		The target (SSM document) must exist and have permissions to use the target. </p>
 * 		       <note>
 *             <p>If you make backward incompatible changes to the SSM document,
 * 			you must call this again to ensure the remediations can run.</p>
 * 			         <p>This API does not support adding remediation configurations for service-linked AWS Config Rules such as Organization Config rules,
 * 				the rules deployed by conformance packs, and rules deployed by AWS Security Hub.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRemediationConfigurationsCommand extends $Command<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutRemediationConfigurationsCommandInput;
    constructor(input: PutRemediationConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
