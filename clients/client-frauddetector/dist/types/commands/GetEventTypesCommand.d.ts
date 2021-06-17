import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetEventTypesRequest, GetEventTypesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEventTypesCommandInput extends GetEventTypesRequest {
}
export interface GetEventTypesCommandOutput extends GetEventTypesResult, __MetadataBearer {
}
/**
 * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventTypesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventTypesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventTypesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEventTypesCommand extends $Command<GetEventTypesCommandInput, GetEventTypesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetEventTypesCommandInput;
    constructor(input: GetEventTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventTypesCommandInput, GetEventTypesCommandOutput>;
    private serialize;
    private deserialize;
}
