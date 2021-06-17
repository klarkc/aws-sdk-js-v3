import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFunctionDefinitionVersionCommandInput extends CreateFunctionDefinitionVersionRequest {
}
export interface CreateFunctionDefinitionVersionCommandOutput extends CreateFunctionDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a Lambda function definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFunctionDefinitionVersionCommand extends $Command<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateFunctionDefinitionVersionCommandInput;
    constructor(input: CreateFunctionDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
