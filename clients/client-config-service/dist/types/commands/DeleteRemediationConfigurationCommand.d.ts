import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRemediationConfigurationRequest, DeleteRemediationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRemediationConfigurationCommandInput extends DeleteRemediationConfigurationRequest {
}
export interface DeleteRemediationConfigurationCommandOutput extends DeleteRemediationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the remediation configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRemediationConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRemediationConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteRemediationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRemediationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRemediationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRemediationConfigurationCommand extends $Command<DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRemediationConfigurationCommandInput;
    constructor(input: DeleteRemediationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
