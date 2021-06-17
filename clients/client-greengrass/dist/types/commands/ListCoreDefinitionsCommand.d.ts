import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionsRequest, ListCoreDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCoreDefinitionsCommandInput extends ListCoreDefinitionsRequest {
}
export interface ListCoreDefinitionsCommandOutput extends ListCoreDefinitionsResponse, __MetadataBearer {
}
/**
 * Retrieves a list of core definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListCoreDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCoreDefinitionsCommand extends $Command<ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListCoreDefinitionsCommandInput;
    constructor(input: ListCoreDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
