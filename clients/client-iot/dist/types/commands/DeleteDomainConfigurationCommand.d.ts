import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDomainConfigurationRequest, DeleteDomainConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDomainConfigurationCommandInput extends DeleteDomainConfigurationRequest {
}
export interface DeleteDomainConfigurationCommandOutput extends DeleteDomainConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDomainConfigurationCommand extends $Command<DeleteDomainConfigurationCommandInput, DeleteDomainConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteDomainConfigurationCommandInput;
    constructor(input: DeleteDomainConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainConfigurationCommandInput, DeleteDomainConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
