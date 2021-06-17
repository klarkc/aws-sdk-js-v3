import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectorDefinitionCommandInput extends CreateConnectorDefinitionRequest {
}
export interface CreateConnectorDefinitionCommandOutput extends CreateConnectorDefinitionResponse, __MetadataBearer {
}
/**
 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectorDefinitionCommand extends $Command<CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateConnectorDefinitionCommandInput;
    constructor(input: CreateConnectorDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
