import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLoggerDefinitionCommandInput extends DeleteLoggerDefinitionRequest {
}
export interface DeleteLoggerDefinitionCommandOutput extends DeleteLoggerDefinitionResponse, __MetadataBearer {
}
/**
 * Deletes a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLoggerDefinitionCommand extends $Command<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteLoggerDefinitionCommandInput;
    constructor(input: DeleteLoggerDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
