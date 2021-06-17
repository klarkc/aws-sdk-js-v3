import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchStopJobRunRequest, BatchStopJobRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchStopJobRunCommandInput extends BatchStopJobRunRequest {
}
export interface BatchStopJobRunCommandOutput extends BatchStopJobRunResponse, __MetadataBearer {
}
/**
 * <p>Stops one or more job runs for a specified job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchStopJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchStopJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchStopJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopJobRunCommandInput} for command's `input` shape.
 * @see {@link BatchStopJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchStopJobRunCommand extends $Command<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchStopJobRunCommandInput;
    constructor(input: BatchStopJobRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
