import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConnectorDefinitionCommandInput extends DeleteConnectorDefinitionRequest {
}
export interface DeleteConnectorDefinitionCommandOutput extends DeleteConnectorDefinitionResponse, __MetadataBearer {
}
/**
 * Deletes a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConnectorDefinitionCommand extends $Command<DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteConnectorDefinitionCommandInput;
    constructor(input: DeleteConnectorDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
