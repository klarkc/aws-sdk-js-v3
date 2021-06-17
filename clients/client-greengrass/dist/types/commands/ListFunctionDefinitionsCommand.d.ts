import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFunctionDefinitionsCommandInput extends ListFunctionDefinitionsRequest {
}
export interface ListFunctionDefinitionsCommandOutput extends ListFunctionDefinitionsResponse, __MetadataBearer {
}
/**
 * Retrieves a list of Lambda function definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListFunctionDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFunctionDefinitionsCommand extends $Command<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListFunctionDefinitionsCommandInput;
    constructor(input: ListFunctionDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
