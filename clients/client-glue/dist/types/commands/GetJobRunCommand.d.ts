import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunRequest, GetJobRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobRunCommandInput extends GetJobRunRequest {
}
export interface GetJobRunCommandOutput extends GetJobRunResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the metadata for a given job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobRunCommand extends $Command<GetJobRunCommandInput, GetJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobRunCommandInput;
    constructor(input: GetJobRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobRunCommandInput, GetJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
