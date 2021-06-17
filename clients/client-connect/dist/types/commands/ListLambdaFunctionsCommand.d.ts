import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListLambdaFunctionsRequest, ListLambdaFunctionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLambdaFunctionsCommandInput extends ListLambdaFunctionsRequest {
}
export interface ListLambdaFunctionsCommandOutput extends ListLambdaFunctionsResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the
 *    relevant contact flow blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLambdaFunctionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLambdaFunctionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLambdaFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLambdaFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListLambdaFunctionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLambdaFunctionsCommand extends $Command<ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListLambdaFunctionsCommandInput;
    constructor(input: ListLambdaFunctionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput>;
    private serialize;
    private deserialize;
}
