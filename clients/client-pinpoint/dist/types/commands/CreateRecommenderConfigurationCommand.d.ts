import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateRecommenderConfigurationRequest, CreateRecommenderConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRecommenderConfigurationCommandInput extends CreateRecommenderConfigurationRequest {
}
export interface CreateRecommenderConfigurationCommandOutput extends CreateRecommenderConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRecommenderConfigurationCommand extends $Command<CreateRecommenderConfigurationCommandInput, CreateRecommenderConfigurationCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateRecommenderConfigurationCommandInput;
    constructor(input: CreateRecommenderConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRecommenderConfigurationCommandInput, CreateRecommenderConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
