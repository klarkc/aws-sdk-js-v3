import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeviceDefinitionVersionCommandInput extends CreateDeviceDefinitionVersionRequest {
}
export interface CreateDeviceDefinitionVersionCommandOutput extends CreateDeviceDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a device definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeviceDefinitionVersionCommand extends $Command<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateDeviceDefinitionVersionCommandInput;
    constructor(input: CreateDeviceDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
