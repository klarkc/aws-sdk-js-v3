import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetActivityTaskInput, GetActivityTaskOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetActivityTaskCommandInput extends GetActivityTaskInput {
}
export interface GetActivityTaskCommandOutput extends GetActivityTaskOutput, __MetadataBearer {
}
/**
 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
 *       scheduled for execution by a running state machine. This initiates a long poll, where the
 *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
 *       an execution of a task of this type is needed.) The maximum time the service holds on to the
 *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
 *       returns a <code>taskToken</code> with a null string.</p>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
 *         higher than the maximum time the service may hold the poll request).</p>
 *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
 *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
 *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetActivityTaskCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetActivityTaskCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new GetActivityTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActivityTaskCommandInput} for command's `input` shape.
 * @see {@link GetActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetActivityTaskCommand extends $Command<GetActivityTaskCommandInput, GetActivityTaskCommandOutput, SFNClientResolvedConfig> {
    readonly input: GetActivityTaskCommandInput;
    constructor(input: GetActivityTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput>;
    private serialize;
    private deserialize;
}
