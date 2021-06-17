import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetLabelsRequest, GetLabelsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLabelsCommandInput extends GetLabelsRequest {
}
export interface GetLabelsCommandOutput extends GetLabelsResult, __MetadataBearer {
}
/**
 * <p>Gets all labels or a specific label if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50.
 *          To get the next page results, provide the pagination token from the
 *          <code>GetGetLabelsResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetLabelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetLabelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLabelsCommandInput} for command's `input` shape.
 * @see {@link GetLabelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLabelsCommand extends $Command<GetLabelsCommandInput, GetLabelsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetLabelsCommandInput;
    constructor(input: GetLabelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLabelsCommandInput, GetLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
