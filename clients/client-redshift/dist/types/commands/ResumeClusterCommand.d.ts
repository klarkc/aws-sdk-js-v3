import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ResumeClusterMessage } from "../models/models_0";
import { ResumeClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResumeClusterCommandInput extends ResumeClusterMessage {
}
export interface ResumeClusterCommandOutput extends ResumeClusterResult, __MetadataBearer {
}
/**
 * <p>Resumes a paused cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResumeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResumeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResumeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeClusterCommandInput} for command's `input` shape.
 * @see {@link ResumeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeClusterCommand extends $Command<ResumeClusterCommandInput, ResumeClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ResumeClusterCommandInput;
    constructor(input: ResumeClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeClusterCommandInput, ResumeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
