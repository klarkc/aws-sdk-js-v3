import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteFunctionDefinitionRequest, DeleteFunctionDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFunctionDefinitionCommandInput extends DeleteFunctionDefinitionRequest {
}
export interface DeleteFunctionDefinitionCommandOutput extends DeleteFunctionDefinitionResponse, __MetadataBearer {
}
/**
 * Deletes a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFunctionDefinitionCommand extends $Command<DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteFunctionDefinitionCommandInput;
    constructor(input: DeleteFunctionDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
