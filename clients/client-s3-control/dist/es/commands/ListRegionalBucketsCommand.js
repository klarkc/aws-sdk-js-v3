import { __extends } from "tslib";
import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import { deserializeAws_restXmlListRegionalBucketsCommand, serializeAws_restXmlListRegionalBucketsCommand, } from "../protocols/Aws_restXml";
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListRegionalBucketsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListRegionalBucketsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListRegionalBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegionalBucketsCommandInput} for command's `input` shape.
 * @see {@link ListRegionalBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRegionalBucketsCommand = /** @class */ (function (_super) {
    __extends(ListRegionalBucketsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRegionalBucketsCommand(input) {
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
    ListRegionalBucketsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "ListRegionalBucketsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRegionalBucketsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRegionalBucketsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRegionalBucketsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListRegionalBucketsCommand(input, context);
    };
    ListRegionalBucketsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListRegionalBucketsCommand(output, context);
    };
    return ListRegionalBucketsCommand;
}($Command));
export { ListRegionalBucketsCommand };
//# sourceMappingURL=ListRegionalBucketsCommand.js.map