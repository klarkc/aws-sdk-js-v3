import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteSecurityConfigurationInput, DeleteSecurityConfigurationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationInput {
}
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Deletes a security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSecurityConfigurationCommand extends $Command<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: DeleteSecurityConfigurationCommandInput;
    constructor(input: DeleteSecurityConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
