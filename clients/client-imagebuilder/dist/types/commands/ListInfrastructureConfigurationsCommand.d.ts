import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListInfrastructureConfigurationsRequest, ListInfrastructureConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInfrastructureConfigurationsCommandInput extends ListInfrastructureConfigurationsRequest {
}
export interface ListInfrastructureConfigurationsCommandOutput extends ListInfrastructureConfigurationsResponse, __MetadataBearer {
}
/**
 * <p> Returns a list of infrastructure configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListInfrastructureConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListInfrastructureConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListInfrastructureConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInfrastructureConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListInfrastructureConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInfrastructureConfigurationsCommand extends $Command<ListInfrastructureConfigurationsCommandInput, ListInfrastructureConfigurationsCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListInfrastructureConfigurationsCommandInput;
    constructor(input: ListInfrastructureConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInfrastructureConfigurationsCommandInput, ListInfrastructureConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
