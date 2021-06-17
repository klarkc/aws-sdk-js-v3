import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeviceDefinitionCommandInput extends DeleteDeviceDefinitionRequest {
}
export interface DeleteDeviceDefinitionCommandOutput extends DeleteDeviceDefinitionResponse, __MetadataBearer {
}
/**
 * Deletes a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeviceDefinitionCommand extends $Command<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteDeviceDefinitionCommandInput;
    constructor(input: DeleteDeviceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
