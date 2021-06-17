import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourceDefinitionVersionCommandInput extends CreateResourceDefinitionVersionRequest {
}
export interface CreateResourceDefinitionVersionCommandOutput extends CreateResourceDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a resource definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceDefinitionVersionCommand extends $Command<CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateResourceDefinitionVersionCommandInput;
    constructor(input: CreateResourceDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
