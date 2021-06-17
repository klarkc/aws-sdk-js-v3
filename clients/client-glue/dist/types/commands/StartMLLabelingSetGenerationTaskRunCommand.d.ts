import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLLabelingSetGenerationTaskRunRequest, StartMLLabelingSetGenerationTaskRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMLLabelingSetGenerationTaskRunCommandInput extends StartMLLabelingSetGenerationTaskRunRequest {
}
export interface StartMLLabelingSetGenerationTaskRunCommandOutput extends StartMLLabelingSetGenerationTaskRunResponse, __MetadataBearer {
}
/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *
 * 	        <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLLabelingSetGenerationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMLLabelingSetGenerationTaskRunCommand extends $Command<StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartMLLabelingSetGenerationTaskRunCommandInput;
    constructor(input: StartMLLabelingSetGenerationTaskRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMLLabelingSetGenerationTaskRunCommandInput, StartMLLabelingSetGenerationTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
