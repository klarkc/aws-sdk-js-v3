import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsForTableRequest, GetColumnStatisticsForTableResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetColumnStatisticsForTableCommandInput extends GetColumnStatisticsForTableRequest {
}
export interface GetColumnStatisticsForTableCommandOutput extends GetColumnStatisticsForTableResponse, __MetadataBearer {
}
/**
 * <p>Retrieves table statistics of columns.</p>
 *
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetColumnStatisticsForTableCommand extends $Command<GetColumnStatisticsForTableCommandInput, GetColumnStatisticsForTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetColumnStatisticsForTableCommandInput;
    constructor(input: GetColumnStatisticsForTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetColumnStatisticsForTableCommandInput, GetColumnStatisticsForTableCommandOutput>;
    private serialize;
    private deserialize;
}
