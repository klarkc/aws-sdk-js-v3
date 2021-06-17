import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainConfigurationCommandInput extends UpdateDomainConfigurationRequest {
}
export interface UpdateDomainConfigurationCommandOutput extends UpdateDomainConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainConfigurationCommand extends $Command<UpdateDomainConfigurationCommandInput, UpdateDomainConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateDomainConfigurationCommandInput;
    constructor(input: UpdateDomainConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainConfigurationCommandInput, UpdateDomainConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
