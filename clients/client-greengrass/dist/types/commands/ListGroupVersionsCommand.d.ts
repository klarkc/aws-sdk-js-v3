import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListGroupVersionsRequest, ListGroupVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupVersionsCommandInput extends ListGroupVersionsRequest {
}
export interface ListGroupVersionsCommandOutput extends ListGroupVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListGroupVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGroupVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupVersionsCommand extends $Command<ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListGroupVersionsCommandInput;
    constructor(input: ListGroupVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
