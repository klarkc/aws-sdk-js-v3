import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeviceDefinitionCommandInput extends UpdateDeviceDefinitionRequest {
}
export interface UpdateDeviceDefinitionCommandOutput extends UpdateDeviceDefinitionResponse, __MetadataBearer {
}
/**
 * Updates a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeviceDefinitionCommand extends $Command<UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateDeviceDefinitionCommandInput;
    constructor(input: UpdateDeviceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
