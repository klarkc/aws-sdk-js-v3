import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionVersionRequest, CreateConnectorDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectorDefinitionVersionCommandInput extends CreateConnectorDefinitionVersionRequest {
}
export interface CreateConnectorDefinitionVersionCommandOutput extends CreateConnectorDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a connector definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectorDefinitionVersionCommand extends $Command<CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateConnectorDefinitionVersionCommandInput;
    constructor(input: CreateConnectorDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
