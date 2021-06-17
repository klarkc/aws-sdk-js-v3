import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateInfrastructureConfigurationRequest, UpdateInfrastructureConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInfrastructureConfigurationCommandInput extends UpdateInfrastructureConfigurationRequest {
}
export interface UpdateInfrastructureConfigurationCommandOutput extends UpdateInfrastructureConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Updates a new infrastructure configuration. An infrastructure configuration defines the
 *       environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInfrastructureConfigurationCommand extends $Command<UpdateInfrastructureConfigurationCommandInput, UpdateInfrastructureConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: UpdateInfrastructureConfigurationCommandInput;
    constructor(input: UpdateInfrastructureConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInfrastructureConfigurationCommandInput, UpdateInfrastructureConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
