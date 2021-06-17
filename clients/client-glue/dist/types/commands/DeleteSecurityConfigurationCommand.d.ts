import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteSecurityConfigurationRequest, DeleteSecurityConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationRequest {
}
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSecurityConfigurationCommand extends $Command<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteSecurityConfigurationCommandInput;
    constructor(input: DeleteSecurityConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
