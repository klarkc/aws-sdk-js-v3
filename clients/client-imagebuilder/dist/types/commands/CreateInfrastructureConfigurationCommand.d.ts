import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateInfrastructureConfigurationRequest, CreateInfrastructureConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInfrastructureConfigurationCommandInput extends CreateInfrastructureConfigurationRequest {
}
export interface CreateInfrastructureConfigurationCommandOutput extends CreateInfrastructureConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the
 *       environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInfrastructureConfigurationCommand extends $Command<CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateInfrastructureConfigurationCommandInput;
    constructor(input: CreateInfrastructureConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
