"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *          Gets the aggregated profile of a profiling group for a specified time range.
 *          Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
 *          into aggregated profiles.
 *      </p>
 *
 *          <note>
 *             <p>
 *             Because aggregated profiles expire over time <code>GetProfile</code> is not idempotent.
 *          </p>
 *          </note>
 *
 *          <p>
 *          Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>startTime</code>,
 *          <code>endTime</code>, <code>period</code>. The maximum time range allowed is 7 days. If you specify all 3 parameters,
 *          an exception is thrown. If you specify only <code>period</code>, the latest aggregated profile is returned.
 *       </p>
 *
 *          <p>
 *          Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
 *          UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
 *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
 *                <code>AggregatedProfileTime</code>
 *             </a>. The aggregated profile's aggregation period determines how long
 *          it is retained by CodeGuru Profiler.
 *       </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
 *             </p>
 *             </li>
 *          </ul>
 *
 *          <p>There are two use cases for calling <code>GetProfile</code>.</p>
 *          <ol>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile that already exists, use
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html">
 *                      <code>ListProfileTimes</code>
 *                   </a> to
 *                view the time ranges of existing aggregated profiles. Use them in a <code>GetProfile</code> request to return a specific,
 *                existing aggregated profile.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
 *                then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
 *                range and return them as one aggregated profile.
 *             </p>
 *
 *                <p> If aggregated profiles do not exist for the full time range requested, then
 *                aggregated profiles for a smaller time range are returned. For example, if the
 *                requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
 *                from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. </p>
 *
 *
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetProfileCommand extends smithy_client_1.Command {
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
        const clientName = "CodeGuruProfilerClient";
        const commandName = "GetProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetProfileResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetProfileCommand(output, context);
    }
}
exports.GetProfileCommand = GetProfileCommand;
//# sourceMappingURL=GetProfileCommand.js.map