import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFunctionDefinitionCommandInput extends CreateFunctionDefinitionRequest {
}
export interface CreateFunctionDefinitionCommandOutput extends CreateFunctionDefinitionResponse, __MetadataBearer {
}
/**
 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFunctionDefinitionCommand extends $Command<CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateFunctionDefinitionCommandInput;
    constructor(input: CreateFunctionDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
