import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { InitiateJobInput, InitiateJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitiateJobCommandInput extends InitiateJobInput {
}
export interface InitiateJobCommandOutput extends InitiateJobOutput, __MetadataBearer {
}
/**
 * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
 *          or a vault retrieval. For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
 *             a Job</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateJobCommandInput} for command's `input` shape.
 * @see {@link InitiateJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitiateJobCommand extends $Command<InitiateJobCommandInput, InitiateJobCommandOutput, GlacierClientResolvedConfig> {
    readonly input: InitiateJobCommandInput;
    constructor(input: InitiateJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateJobCommandInput, InitiateJobCommandOutput>;
    private serialize;
    private deserialize;
}
