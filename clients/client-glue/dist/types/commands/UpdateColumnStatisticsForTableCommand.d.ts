import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateColumnStatisticsForTableCommandInput extends UpdateColumnStatisticsForTableRequest {
}
export interface UpdateColumnStatisticsForTableCommandOutput extends UpdateColumnStatisticsForTableResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateColumnStatisticsForTableCommand extends $Command<UpdateColumnStatisticsForTableCommandInput, UpdateColumnStatisticsForTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateColumnStatisticsForTableCommandInput;
    constructor(input: UpdateColumnStatisticsForTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateColumnStatisticsForTableCommandInput, UpdateColumnStatisticsForTableCommandOutput>;
    private serialize;
    private deserialize;
}
