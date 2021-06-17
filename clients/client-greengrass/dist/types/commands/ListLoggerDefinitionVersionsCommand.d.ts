import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionVersionsRequest, ListLoggerDefinitionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLoggerDefinitionVersionsCommandInput extends ListLoggerDefinitionVersionsRequest {
}
export interface ListLoggerDefinitionVersionsCommandOutput extends ListLoggerDefinitionVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListLoggerDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggerDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLoggerDefinitionVersionsCommand extends $Command<ListLoggerDefinitionVersionsCommandInput, ListLoggerDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListLoggerDefinitionVersionsCommandInput;
    constructor(input: ListLoggerDefinitionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLoggerDefinitionVersionsCommandInput, ListLoggerDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
