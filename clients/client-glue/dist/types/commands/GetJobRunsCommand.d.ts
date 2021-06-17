import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunsRequest, GetJobRunsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobRunsCommandInput extends GetJobRunsRequest {
}
export interface GetJobRunsCommandOutput extends GetJobRunsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata for all runs of a given job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobRunsCommandInput} for command's `input` shape.
 * @see {@link GetJobRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobRunsCommand extends $Command<GetJobRunsCommandInput, GetJobRunsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobRunsCommandInput;
    constructor(input: GetJobRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobRunsCommandInput, GetJobRunsCommandOutput>;
    private serialize;
    private deserialize;
}
