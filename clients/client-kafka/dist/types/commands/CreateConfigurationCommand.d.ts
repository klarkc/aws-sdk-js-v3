import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigurationCommandInput extends CreateConfigurationRequest {
}
export interface CreateConfigurationCommandOutput extends CreateConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates a new MSK configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationCommand extends $Command<CreateConfigurationCommandInput, CreateConfigurationCommandOutput, KafkaClientResolvedConfig> {
    readonly input: CreateConfigurationCommandInput;
    constructor(input: CreateConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationCommandInput, CreateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
