import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobFailureResultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutJobFailureResultCommandInput extends PutJobFailureResultInput {
}
export interface PutJobFailureResultCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutJobFailureResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutJobFailureResultCommand extends $Command<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutJobFailureResultCommandInput;
    constructor(input: PutJobFailureResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput>;
    private serialize;
    private deserialize;
}
