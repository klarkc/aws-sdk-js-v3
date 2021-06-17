import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateDistributionConfigurationRequest, CreateDistributionConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDistributionConfigurationCommandInput extends CreateDistributionConfigurationRequest {
}
export interface CreateDistributionConfigurationCommandOutput extends CreateDistributionConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates a new distribution configuration. Distribution configurations define and configure
 *       the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDistributionConfigurationCommand extends $Command<CreateDistributionConfigurationCommandInput, CreateDistributionConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateDistributionConfigurationCommandInput;
    constructor(input: CreateDistributionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDistributionConfigurationCommandInput, CreateDistributionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
