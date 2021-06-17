import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetRecommenderConfigurationRequest, GetRecommenderConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRecommenderConfigurationCommandInput extends GetRecommenderConfigurationRequest {
}
export interface GetRecommenderConfigurationCommandOutput extends GetRecommenderConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRecommenderConfigurationCommand extends $Command<GetRecommenderConfigurationCommandInput, GetRecommenderConfigurationCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetRecommenderConfigurationCommandInput;
    constructor(input: GetRecommenderConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecommenderConfigurationCommandInput, GetRecommenderConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
