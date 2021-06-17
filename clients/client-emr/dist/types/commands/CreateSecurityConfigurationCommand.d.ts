import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateSecurityConfigurationInput, CreateSecurityConfigurationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationInput {
}
export interface CreateSecurityConfigurationCommandOutput extends CreateSecurityConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Creates a security configuration, which is stored in the service and can be specified
 *          when a cluster is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSecurityConfigurationCommand extends $Command<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: CreateSecurityConfigurationCommandInput;
    constructor(input: CreateSecurityConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
