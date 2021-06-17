import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteInfrastructureConfigurationRequest, DeleteInfrastructureConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInfrastructureConfigurationCommandInput extends DeleteInfrastructureConfigurationRequest {
}
export interface DeleteInfrastructureConfigurationCommandOutput extends DeleteInfrastructureConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Deletes an infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInfrastructureConfigurationCommand extends $Command<DeleteInfrastructureConfigurationCommandInput, DeleteInfrastructureConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: DeleteInfrastructureConfigurationCommandInput;
    constructor(input: DeleteInfrastructureConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInfrastructureConfigurationCommandInput, DeleteInfrastructureConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
