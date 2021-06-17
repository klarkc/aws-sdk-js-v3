import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetExternalModelsRequest, GetExternalModelsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExternalModelsCommandInput extends GetExternalModelsRequest {
}
export interface GetExternalModelsCommandOutput extends GetExternalModelsResult, __MetadataBearer {
}
/**
 * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
 *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
 *          actions retrieves a maximum of 10 records per page. If you provide a
 *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
 *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
 *          of your request. A null pagination token fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetExternalModelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetExternalModelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetExternalModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExternalModelsCommandInput} for command's `input` shape.
 * @see {@link GetExternalModelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExternalModelsCommand extends $Command<GetExternalModelsCommandInput, GetExternalModelsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetExternalModelsCommandInput;
    constructor(input: GetExternalModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExternalModelsCommandInput, GetExternalModelsCommandOutput>;
    private serialize;
    private deserialize;
}
