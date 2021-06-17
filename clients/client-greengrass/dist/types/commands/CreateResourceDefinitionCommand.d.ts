import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionRequest, CreateResourceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourceDefinitionCommandInput extends CreateResourceDefinitionRequest {
}
export interface CreateResourceDefinitionCommandOutput extends CreateResourceDefinitionResponse, __MetadataBearer {
}
/**
 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceDefinitionCommand extends $Command<CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateResourceDefinitionCommandInput;
    constructor(input: CreateResourceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
