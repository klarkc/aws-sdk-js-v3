import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigurationCommandInput extends CreateConfigurationRequest {
}
export interface CreateConfigurationCommandOutput extends CreateConfigurationResponse, __MetadataBearer {
}
/**
 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationCommand extends $Command<CreateConfigurationCommandInput, CreateConfigurationCommandOutput, MqClientResolvedConfig> {
    readonly input: CreateConfigurationCommandInput;
    constructor(input: CreateConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationCommandInput, CreateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
