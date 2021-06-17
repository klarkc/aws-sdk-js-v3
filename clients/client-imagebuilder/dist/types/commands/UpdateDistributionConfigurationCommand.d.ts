import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateDistributionConfigurationRequest, UpdateDistributionConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDistributionConfigurationCommandInput extends UpdateDistributionConfigurationRequest {
}
export interface UpdateDistributionConfigurationCommandOutput extends UpdateDistributionConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Updates a new distribution configuration. Distribution configurations define and
 *       configure the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDistributionConfigurationCommand extends $Command<UpdateDistributionConfigurationCommandInput, UpdateDistributionConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: UpdateDistributionConfigurationCommandInput;
    constructor(input: UpdateDistributionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDistributionConfigurationCommandInput, UpdateDistributionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
