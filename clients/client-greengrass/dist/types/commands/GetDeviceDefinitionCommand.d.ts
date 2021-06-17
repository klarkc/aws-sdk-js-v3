import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeviceDefinitionRequest, GetDeviceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeviceDefinitionCommandInput extends GetDeviceDefinitionRequest {
}
export interface GetDeviceDefinitionCommandOutput extends GetDeviceDefinitionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeviceDefinitionCommand extends $Command<GetDeviceDefinitionCommandInput, GetDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetDeviceDefinitionCommandInput;
    constructor(input: GetDeviceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceDefinitionCommandInput, GetDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
