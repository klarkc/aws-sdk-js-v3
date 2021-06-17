import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetSampleDataRequest, GetSampleDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSampleDataCommandInput extends GetSampleDataRequest {
}
export interface GetSampleDataCommandOutput extends GetSampleDataResponse, __MetadataBearer {
}
/**
 * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetSampleDataCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetSampleDataCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetSampleDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSampleDataCommandInput} for command's `input` shape.
 * @see {@link GetSampleDataCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSampleDataCommand extends $Command<GetSampleDataCommandInput, GetSampleDataCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: GetSampleDataCommandInput;
    constructor(input: GetSampleDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSampleDataCommandInput, GetSampleDataCommandOutput>;
    private serialize;
    private deserialize;
}
