import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartImportLabelsTaskRunRequest, StartImportLabelsTaskRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartImportLabelsTaskRunCommandInput extends StartImportLabelsTaskRunRequest {
}
export interface StartImportLabelsTaskRunCommandOutput extends StartImportLabelsTaskRunResponse, __MetadataBearer {
}
/**
 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the
 *       machine learning transform and improve its quality. This API operation is generally used as
 *       part of the active learning workflow that starts with the
 *         <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in
 *       improving the quality of your machine learning transform. </p>
 *
 *          <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue machine learning
 *       will have generated a series of questions for humans to answer. (Answering these questions is
 *       often called 'labeling' in the machine learning workflows). In the case of the
 *         <code>FindMatches</code> transform, these questions are of the form, “What is the correct
 *       way to group these rows together into groups composed entirely of matching records?” After the
 *       labeling process is finished, users upload their answers/labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform use the new and improved labels and perform
 *       a higher-quality transformation.</p>
 *
 *          <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and
 *       combines all labels that you upload unless you set <code>Replace</code> to true. If you set
 *         <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all
 *       previously uploaded labels and learns only from the exact set that you upload. Replacing
 *       labels can be helpful if you realize that you previously uploaded incorrect labels, and you
 *       believe that they are having a negative effect on your transform quality.</p>
 *
 *          <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code>
 *       operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartImportLabelsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartImportLabelsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartImportLabelsTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImportLabelsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartImportLabelsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartImportLabelsTaskRunCommand extends $Command<StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartImportLabelsTaskRunCommandInput;
    constructor(input: StartImportLabelsTaskRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
