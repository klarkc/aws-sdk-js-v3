import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobSuccessResultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutJobSuccessResultCommandInput extends PutJobSuccessResultInput {
}
export interface PutJobSuccessResultCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the success of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutJobSuccessResultCommand extends $Command<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutJobSuccessResultCommandInput;
    constructor(input: PutJobSuccessResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput>;
    private serialize;
    private deserialize;
}
