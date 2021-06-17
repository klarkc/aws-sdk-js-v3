import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateThingRuntimeConfigurationRequest, UpdateThingRuntimeConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThingRuntimeConfigurationCommandInput extends UpdateThingRuntimeConfigurationRequest {
}
export interface UpdateThingRuntimeConfigurationCommandOutput extends UpdateThingRuntimeConfigurationResponse, __MetadataBearer {
}
/**
 * Updates the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThingRuntimeConfigurationCommand extends $Command<UpdateThingRuntimeConfigurationCommandInput, UpdateThingRuntimeConfigurationCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateThingRuntimeConfigurationCommandInput;
    constructor(input: UpdateThingRuntimeConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingRuntimeConfigurationCommandInput, UpdateThingRuntimeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
