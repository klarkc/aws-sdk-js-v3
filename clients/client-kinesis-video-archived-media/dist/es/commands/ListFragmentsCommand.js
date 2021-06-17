import { __extends } from "tslib";
import { ListFragmentsInput, ListFragmentsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListFragmentsCommand, serializeAws_restJson1ListFragmentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <a>Fragment</a> objects from the specified stream and
 *             timestamp range within the archived data.</p>
 *         <p>Listing fragments is eventually consistent. This means that even if the producer
 *             receives an acknowledgment that a fragment is persisted, the result might not be
 *             returned immediately from a request to <code>ListFragments</code>. However, results are
 *             typically available in less than one second.</p>
 *         <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>ListFragments</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *         </note>
 *
 *         <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                     <p>
 *                         <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         AWS, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                 </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, ListFragmentsCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, ListFragmentsCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new ListFragmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFragmentsCommandInput} for command's `input` shape.
 * @see {@link ListFragmentsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFragmentsCommand = /** @class */ (function (_super) {
    __extends(ListFragmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFragmentsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ListFragmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoArchivedMediaClient";
        var commandName = "ListFragmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFragmentsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListFragmentsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFragmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFragmentsCommand(input, context);
    };
    ListFragmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFragmentsCommand(output, context);
    };
    return ListFragmentsCommand;
}($Command));
export { ListFragmentsCommand };
//# sourceMappingURL=ListFragmentsCommand.js.map