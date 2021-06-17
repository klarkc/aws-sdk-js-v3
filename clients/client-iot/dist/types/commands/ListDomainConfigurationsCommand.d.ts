import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListDomainConfigurationsRequest, ListDomainConfigurationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDomainConfigurationsCommandInput extends ListDomainConfigurationsRequest {
}
export interface ListDomainConfigurationsCommandOutput extends ListDomainConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDomainConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDomainConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDomainConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDomainConfigurationsCommand extends $Command<ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListDomainConfigurationsCommandInput;
    constructor(input: ListDomainConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
