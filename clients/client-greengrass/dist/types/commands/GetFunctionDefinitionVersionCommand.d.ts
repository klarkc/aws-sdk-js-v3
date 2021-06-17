import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFunctionDefinitionVersionCommandInput extends GetFunctionDefinitionVersionRequest {
}
export interface GetFunctionDefinitionVersionCommandOutput extends GetFunctionDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFunctionDefinitionVersionCommand extends $Command<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetFunctionDefinitionVersionCommandInput;
    constructor(input: GetFunctionDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
