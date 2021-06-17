import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetIndexingConfigurationRequest, GetIndexingConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIndexingConfigurationCommandInput extends GetIndexingConfigurationRequest {
}
export interface GetIndexingConfigurationCommandOutput extends GetIndexingConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Gets the indexing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetIndexingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIndexingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIndexingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIndexingConfigurationCommand extends $Command<GetIndexingConfigurationCommandInput, GetIndexingConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetIndexingConfigurationCommandInput;
    constructor(input: GetIndexingConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIndexingConfigurationCommandInput, GetIndexingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
