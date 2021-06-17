import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateDomainConfigurationRequest, CreateDomainConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDomainConfigurationCommandInput extends CreateDomainConfigurationRequest {
}
export interface CreateDomainConfigurationCommandOutput extends CreateDomainConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates a domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDomainConfigurationCommand extends $Command<CreateDomainConfigurationCommandInput, CreateDomainConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateDomainConfigurationCommandInput;
    constructor(input: CreateDomainConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDomainConfigurationCommandInput, CreateDomainConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
