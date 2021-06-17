import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobsRequest, GetJobsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobsCommandInput extends GetJobsRequest {
}
export interface GetJobsCommandOutput extends GetJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all current job definitions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobsCommandInput} for command's `input` shape.
 * @see {@link GetJobsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobsCommand extends $Command<GetJobsCommandInput, GetJobsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobsCommandInput;
    constructor(input: GetJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobsCommandInput, GetJobsCommandOutput>;
    private serialize;
    private deserialize;
}
