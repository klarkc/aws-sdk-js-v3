import { __extends } from "tslib";
import { GetMediaForFragmentListInput, GetMediaForFragmentListOutput } from "../models/models_0";
import { deserializeAws_restJson1GetMediaForFragmentListCommand, serializeAws_restJson1GetMediaForFragmentListCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets media for a list of fragments (specified by fragment number) from the archived
 *             data in an Amazon Kinesis video stream.</p>
 *
 *         <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using
 *                 the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *         </note>
 *
 *         <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
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
 * import { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new GetMediaForFragmentListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMediaForFragmentListCommandInput} for command's `input` shape.
 * @see {@link GetMediaForFragmentListCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMediaForFragmentListCommand = /** @class */ (function (_super) {
    __extends(GetMediaForFragmentListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMediaForFragmentListCommand(input) {
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
    GetMediaForFragmentListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoArchivedMediaClient";
        var commandName = "GetMediaForFragmentListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMediaForFragmentListInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMediaForFragmentListOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMediaForFragmentListCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMediaForFragmentListCommand(input, context);
    };
    GetMediaForFragmentListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMediaForFragmentListCommand(output, context);
    };
    return GetMediaForFragmentListCommand;
}($Command));
export { GetMediaForFragmentListCommand };
//# sourceMappingURL=GetMediaForFragmentListCommand.js.map