import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteDistributionConfigurationRequest, DeleteDistributionConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDistributionConfigurationCommandInput extends DeleteDistributionConfigurationRequest {
}
export interface DeleteDistributionConfigurationCommandOutput extends DeleteDistributionConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Deletes a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDistributionConfigurationCommand extends $Command<DeleteDistributionConfigurationCommandInput, DeleteDistributionConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: DeleteDistributionConfigurationCommandInput;
    constructor(input: DeleteDistributionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDistributionConfigurationCommandInput, DeleteDistributionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
