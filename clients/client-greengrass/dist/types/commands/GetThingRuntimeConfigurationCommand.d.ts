import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetThingRuntimeConfigurationRequest, GetThingRuntimeConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetThingRuntimeConfigurationCommandInput extends GetThingRuntimeConfigurationRequest {
}
export interface GetThingRuntimeConfigurationCommandOutput extends GetThingRuntimeConfigurationResponse, __MetadataBearer {
}
/**
 * Get the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetThingRuntimeConfigurationCommand extends $Command<GetThingRuntimeConfigurationCommandInput, GetThingRuntimeConfigurationCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetThingRuntimeConfigurationCommandInput;
    constructor(input: GetThingRuntimeConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThingRuntimeConfigurationCommandInput, GetThingRuntimeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
