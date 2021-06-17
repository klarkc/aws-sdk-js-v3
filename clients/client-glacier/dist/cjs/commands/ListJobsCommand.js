"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation lists jobs for a vault, including jobs that are in-progress and jobs
 *          that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation
 *          time.</p>
 *
 *          <note>
 *             <p>Amazon Glacier retains recently completed jobs for a period before deleting them;
 *             however, it eventually removes completed jobs. The output of completed jobs can be
 *             retrieved. Retaining completed jobs for a period of time after they have completed
 *             enables you to get a job output in the event you miss the job completion notification or
 *             your first attempt to download it fails. For example, suppose you start an archive
 *             retrieval job to download an archive. After the job completes, you start to download the
 *             archive but encounter a network error. In this scenario, you can retry and download the
 *             archive while the job exists.</p>
 *          </note>
 *
 *          <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field.
 *          If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list,
 *          the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list.
 *          To return a list of jobs that begins at a specific job,
 *          set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p>
 *
 *          <p>You can set a maximum limit for the number of jobs returned in the response by
 *          specifying the <code>limit</code> parameter in the request. The default limit is 50. The
 *          number of jobs returned might be fewer than the limit, but the number of returned jobs
 *          never exceeds the limit.</p>
 *
 *         <p>Additionally, you can filter the jobs list returned by specifying the optional
 *             <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using
 *          the <code>statuscode</code> parameter, you can specify to return only jobs that match
 *          either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status.
 *          Using the <code>completed</code> parameter, you can specify to return only jobs that were
 *          completed (<code>true</code>) or jobs that were not completed
 *          (<code>false</code>).</p>
 *
 *          <p>For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListJobsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListJobsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListJobsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GlacierClient";
        const commandName = "ListJobsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListJobsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListJobsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListJobsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListJobsCommand(output, context);
    }
}
exports.ListJobsCommand = ListJobsCommand;
//# sourceMappingURL=ListJobsCommand.js.map