import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionRequest, CreateDeviceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeviceDefinitionCommandInput extends CreateDeviceDefinitionRequest {
}
export interface CreateDeviceDefinitionCommandOutput extends CreateDeviceDefinitionResponse, __MetadataBearer {
}
/**
 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeviceDefinitionCommand extends $Command<CreateDeviceDefinitionCommandInput, CreateDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateDeviceDefinitionCommandInput;
    constructor(input: CreateDeviceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceDefinitionCommandInput, CreateDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
