import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionRequest, CreateLoggerDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLoggerDefinitionCommandInput extends CreateLoggerDefinitionRequest {
}
export interface CreateLoggerDefinitionCommandOutput extends CreateLoggerDefinitionResponse, __MetadataBearer {
}
/**
 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLoggerDefinitionCommand extends $Command<CreateLoggerDefinitionCommandInput, CreateLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateLoggerDefinitionCommandInput;
    constructor(input: CreateLoggerDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoggerDefinitionCommandInput, CreateLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
