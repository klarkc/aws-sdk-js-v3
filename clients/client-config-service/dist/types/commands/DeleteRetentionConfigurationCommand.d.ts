import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRetentionConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRetentionConfigurationCommandInput extends DeleteRetentionConfigurationRequest {
}
export interface DeleteRetentionConfigurationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the retention configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRetentionConfigurationCommand extends $Command<DeleteRetentionConfigurationCommandInput, DeleteRetentionConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRetentionConfigurationCommandInput;
    constructor(input: DeleteRetentionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRetentionConfigurationCommandInput, DeleteRetentionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
