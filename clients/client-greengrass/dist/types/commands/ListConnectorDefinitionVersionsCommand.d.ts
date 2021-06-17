import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionVersionsRequest, ListConnectorDefinitionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConnectorDefinitionVersionsCommandInput extends ListConnectorDefinitionVersionsRequest {
}
export interface ListConnectorDefinitionVersionsCommandOutput extends ListConnectorDefinitionVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListConnectorDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConnectorDefinitionVersionsCommand extends $Command<ListConnectorDefinitionVersionsCommandInput, ListConnectorDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListConnectorDefinitionVersionsCommandInput;
    constructor(input: ListConnectorDefinitionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectorDefinitionVersionsCommandInput, ListConnectorDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
