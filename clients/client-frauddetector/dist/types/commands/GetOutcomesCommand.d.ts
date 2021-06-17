import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetOutcomesRequest, GetOutcomesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOutcomesCommandInput extends GetOutcomesRequest {
}
export interface GetOutcomesCommandOutput extends GetOutcomesResult, __MetadataBearer {
}
/**
 * <p>Gets one or more outcomes. This is a paginated
 *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
 *          100 records per page. If you provide a <code>maxResults</code>, the value must be
 *          between 50 and 100. To get the next page results, provide the pagination token from the
 *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetOutcomesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetOutcomesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetOutcomesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutcomesCommandInput} for command's `input` shape.
 * @see {@link GetOutcomesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOutcomesCommand extends $Command<GetOutcomesCommandInput, GetOutcomesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetOutcomesCommandInput;
    constructor(input: GetOutcomesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOutcomesCommandInput, GetOutcomesCommandOutput>;
    private serialize;
    private deserialize;
}
