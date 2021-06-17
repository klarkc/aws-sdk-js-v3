import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionVersionsRequest, ListCoreDefinitionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCoreDefinitionVersionsCommandInput extends ListCoreDefinitionVersionsRequest {
}
export interface ListCoreDefinitionVersionsCommandOutput extends ListCoreDefinitionVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListCoreDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCoreDefinitionVersionsCommand extends $Command<ListCoreDefinitionVersionsCommandInput, ListCoreDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListCoreDefinitionVersionsCommandInput;
    constructor(input: ListCoreDefinitionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCoreDefinitionVersionsCommandInput, ListCoreDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
