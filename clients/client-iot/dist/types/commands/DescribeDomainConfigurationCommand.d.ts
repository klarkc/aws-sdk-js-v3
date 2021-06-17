import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeDomainConfigurationRequest, DescribeDomainConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDomainConfigurationCommandInput extends DescribeDomainConfigurationRequest {
}
export interface DescribeDomainConfigurationCommandOutput extends DescribeDomainConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Gets summary information about a domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDomainConfigurationCommand extends $Command<DescribeDomainConfigurationCommandInput, DescribeDomainConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeDomainConfigurationCommandInput;
    constructor(input: DescribeDomainConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainConfigurationCommandInput, DescribeDomainConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
