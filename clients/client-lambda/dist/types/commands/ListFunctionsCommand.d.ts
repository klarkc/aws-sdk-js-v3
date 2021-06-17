import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionsRequest, ListFunctionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFunctionsCommandInput extends ListFunctionsRequest {
}
export interface ListFunctionsCommandOutput extends ListFunctionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
 *       functions per call.</p>
 *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
 *       addition to the unpublished version. </p>
 *          <note>
 *             <p>The <code>ListFunctions</code> action returns a subset of the <a>FunctionConfiguration</a> fields.
 *       To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode)
 *       for a function or version, use <a>GetFunction</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFunctionsCommand extends $Command<ListFunctionsCommandInput, ListFunctionsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListFunctionsCommandInput;
    constructor(input: ListFunctionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFunctionsCommandInput, ListFunctionsCommandOutput>;
    private serialize;
    private deserialize;
}
