import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceDefinitionVersionsCommandInput extends ListResourceDefinitionVersionsRequest {
}
export interface ListResourceDefinitionVersionsCommandOutput extends ListResourceDefinitionVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListResourceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListResourceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListResourceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceDefinitionVersionsCommand extends $Command<ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListResourceDefinitionVersionsCommandInput;
    constructor(input: ListResourceDefinitionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
