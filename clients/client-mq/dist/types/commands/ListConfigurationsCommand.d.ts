import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConfigurationsCommandInput extends ListConfigurationsRequest {
}
export interface ListConfigurationsCommandOutput extends ListConfigurationsResponse, __MetadataBearer {
}
/**
 * Returns a list of all configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListConfigurationsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListConfigurationsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConfigurationsCommand extends $Command<ListConfigurationsCommandInput, ListConfigurationsCommandOutput, MqClientResolvedConfig> {
    readonly input: ListConfigurationsCommandInput;
    constructor(input: ListConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
