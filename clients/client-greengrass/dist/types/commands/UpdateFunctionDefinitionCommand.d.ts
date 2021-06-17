import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateFunctionDefinitionRequest, UpdateFunctionDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFunctionDefinitionCommandInput extends UpdateFunctionDefinitionRequest {
}
export interface UpdateFunctionDefinitionCommandOutput extends UpdateFunctionDefinitionResponse, __MetadataBearer {
}
/**
 * Updates a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFunctionDefinitionCommand extends $Command<UpdateFunctionDefinitionCommandInput, UpdateFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateFunctionDefinitionCommandInput;
    constructor(input: UpdateFunctionDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFunctionDefinitionCommandInput, UpdateFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
