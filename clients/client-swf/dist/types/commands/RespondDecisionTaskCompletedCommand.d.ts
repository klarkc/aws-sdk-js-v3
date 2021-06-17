import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondDecisionTaskCompletedInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RespondDecisionTaskCompletedCommandInput extends RespondDecisionTaskCompletedInput {
}
export interface RespondDecisionTaskCompletedCommandOutput extends __MetadataBearer {
}
/**
 * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified
 *       by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument
 *       specifies the list of decisions made while processing the task.</p>
 *
 *          <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The
 *         <code>executionContext</code> specified is attached to the event in the workflow execution
 *       history.</p>
 *
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *
 *          <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it
 *       can express permissions for the list of decisions in the <code>decisions</code> parameter.
 *       Each of the decisions has one or more parameters, much like a regular API call. To allow for
 *       policies to be as readable as possible, you can express permissions on decisions as if they
 *       were actual API calls, including applying conditions to some parameters. For more information,
 *       see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
 *         IAM to Manage Access to Amazon SWF Workflows</a> in the
 *       <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RespondDecisionTaskCompletedCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondDecisionTaskCompletedCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RespondDecisionTaskCompletedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondDecisionTaskCompletedCommandInput} for command's `input` shape.
 * @see {@link RespondDecisionTaskCompletedCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RespondDecisionTaskCompletedCommand extends $Command<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondDecisionTaskCompletedCommandInput;
    constructor(input: RespondDecisionTaskCompletedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput>;
    private serialize;
    private deserialize;
}
