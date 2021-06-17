import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetDistributionConfigurationRequest, GetDistributionConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDistributionConfigurationCommandInput extends GetDistributionConfigurationRequest {
}
export interface GetDistributionConfigurationCommandOutput extends GetDistributionConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Gets a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDistributionConfigurationCommand extends $Command<GetDistributionConfigurationCommandInput, GetDistributionConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetDistributionConfigurationCommandInput;
    constructor(input: GetDistributionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionConfigurationCommandInput, GetDistributionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
