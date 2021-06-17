import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRequest, GetJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobCommandInput extends GetJobRequest {
}
export interface GetJobCommandOutput extends GetJobResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an existing job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobCommand extends $Command<GetJobCommandInput, GetJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobCommandInput;
    constructor(input: GetJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobCommandInput, GetJobCommandOutput>;
    private serialize;
    private deserialize;
}
