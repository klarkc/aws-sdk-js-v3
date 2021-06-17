import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {
}
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {
}
/**
 * Updates the specified configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConfigurationCommand extends $Command<UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput, MqClientResolvedConfig> {
    readonly input: UpdateConfigurationCommandInput;
    constructor(input: UpdateConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
