import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeNotebookExecutionInput, DescribeNotebookExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNotebookExecutionCommandInput extends DescribeNotebookExecutionInput {
}
export interface DescribeNotebookExecutionCommandOutput extends DescribeNotebookExecutionOutput, __MetadataBearer {
}
/**
 * <p>Provides details of a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNotebookExecutionCommand extends $Command<DescribeNotebookExecutionCommandInput, DescribeNotebookExecutionCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeNotebookExecutionCommandInput;
    constructor(input: DescribeNotebookExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotebookExecutionCommandInput, DescribeNotebookExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
