import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetVariablesRequest, GetVariablesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVariablesCommandInput extends GetVariablesRequest {
}
export interface GetVariablesCommandOutput extends GetVariablesResult, __MetadataBearer {
}
/**
 * <p>Gets all of the variables or the specific variable. This is a
 *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
 *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
 *          50 and 100. To get the next page result, a provide a pagination token from
 *         <code>GetVariablesResult</code> as part of your request. Null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetVariablesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetVariablesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetVariablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVariablesCommandInput} for command's `input` shape.
 * @see {@link GetVariablesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVariablesCommand extends $Command<GetVariablesCommandInput, GetVariablesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetVariablesCommandInput;
    constructor(input: GetVariablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVariablesCommandInput, GetVariablesCommandOutput>;
    private serialize;
    private deserialize;
}
