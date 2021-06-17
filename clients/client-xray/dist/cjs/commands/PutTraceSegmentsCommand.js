"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutTraceSegmentsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Uploads segment documents to AWS X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in
 *       batches. A segment document can be a completed segment, an in-progress segment, or an array of
 *       subsegments.</p>
 *          <p>Segments must include the following fields. For the full segment document schema, see
 *         <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray
 *         Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
 *          <p class="title">
 *             <b>Required segment document fields</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>name</code> - The name of the service that handled the request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16
 *           hexadecimal digits.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from
 *           a single client request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in
 *           epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or
 *             <code>1.480615200010E9</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>end_time</code> - Time the segment or subsegment was closed. For example,
 *             <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or
 *             <code>in_progress</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to
 *           record that a segment has been started, but is not complete. Send an in-progress segment when your application
 *           receives a request that will take a long time to serve, to trace that the request was received. When the
 *           response is sent, send the complete segment to overwrite the in-progress segment.</p>
 *             </li>
 *          </ul>
 *          <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example,
 *       1-58406520-a006649127e371903a2de979. This includes:</p>
 *          <p class="title">
 *             <b>Trace ID Format</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The version number, for instance, <code>1</code>.</p>
 *             </li>
 *             <li>
 *                <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For
 *           example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds,
 *           or <code>58406520</code> in hexadecimal.</p>
 *             </li>
 *             <li>
 *                <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal
 *           digits.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTraceSegmentsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTraceSegmentsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutTraceSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTraceSegmentsCommandInput} for command's `input` shape.
 * @see {@link PutTraceSegmentsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutTraceSegmentsCommand extends smithy_client_1.Command {
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
        const clientName = "XRayClient";
        const commandName = "PutTraceSegmentsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutTraceSegmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutTraceSegmentsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutTraceSegmentsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutTraceSegmentsCommand(output, context);
    }
}
exports.PutTraceSegmentsCommand = PutTraceSegmentsCommand;
//# sourceMappingURL=PutTraceSegmentsCommand.js.map