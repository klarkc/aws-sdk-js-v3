import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListDistributionConfigurationsRequest, ListDistributionConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDistributionConfigurationsCommandInput extends ListDistributionConfigurationsRequest {
}
export interface ListDistributionConfigurationsCommandOutput extends ListDistributionConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of distribution configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListDistributionConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListDistributionConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListDistributionConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListDistributionConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDistributionConfigurationsCommand extends $Command<ListDistributionConfigurationsCommandInput, ListDistributionConfigurationsCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListDistributionConfigurationsCommandInput;
    constructor(input: ListDistributionConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDistributionConfigurationsCommandInput, ListDistributionConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
