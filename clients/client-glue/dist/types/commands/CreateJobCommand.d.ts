import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateJobCommandInput extends CreateJobRequest {
}
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a new job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateJobCommand extends $Command<CreateJobCommandInput, CreateJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateJobCommandInput;
    constructor(input: CreateJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateJobCommandInput, CreateJobCommandOutput>;
    private serialize;
    private deserialize;
}
