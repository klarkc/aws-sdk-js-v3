import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLoggerDefinitionVersionCommandInput extends CreateLoggerDefinitionVersionRequest {
}
export interface CreateLoggerDefinitionVersionCommandOutput extends CreateLoggerDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a logger definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLoggerDefinitionVersionCommand extends $Command<CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateLoggerDefinitionVersionCommandInput;
    constructor(input: CreateLoggerDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
