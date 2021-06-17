import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetInfrastructureConfigurationRequest, GetInfrastructureConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInfrastructureConfigurationCommandInput extends GetInfrastructureConfigurationRequest {
}
export interface GetInfrastructureConfigurationCommandOutput extends GetInfrastructureConfigurationResponse, __MetadataBearer {
}
/**
 * <p> Gets an infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInfrastructureConfigurationCommand extends $Command<GetInfrastructureConfigurationCommandInput, GetInfrastructureConfigurationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetInfrastructureConfigurationCommandInput;
    constructor(input: GetInfrastructureConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInfrastructureConfigurationCommandInput, GetInfrastructureConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
