import { __extends } from "tslib";
import { GetFileUploadURLRequest, GetFileUploadURLResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFileUploadURLCommand, serializeAws_json1_1GetFileUploadURLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>GetFileUploadURL</code>
 *             operation generates and returns a temporary URL. You use the
 *             temporary URL to retrieve a file uploaded by a Worker as an answer to
 *             a FileUploadAnswer question for a HIT. The temporary URL is generated
 *             the instant the GetFileUploadURL operation is called, and is valid
 *             for 60 seconds. You can get a temporary file upload URL any time
 *             until the HIT is disposed. After the HIT is disposed, any uploaded
 *             files are deleted, and cannot be retrieved.
 *
 *             Pending Deprecation on December 12, 2017. The Answer Specification
 *             structure will no longer  support the <code>FileUploadAnswer</code>
 *             element to be used for the QuestionForm data structure.
 *             Instead, we recommend that Requesters who want to create HITs asking
 *             Workers to upload files to use Amazon S3.
 *
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetFileUploadURLCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetFileUploadURLCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetFileUploadURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFileUploadURLCommandInput} for command's `input` shape.
 * @see {@link GetFileUploadURLCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFileUploadURLCommand = /** @class */ (function (_super) {
    __extends(GetFileUploadURLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFileUploadURLCommand(input) {
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
    GetFileUploadURLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetFileUploadURLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFileUploadURLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFileUploadURLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFileUploadURLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFileUploadURLCommand(input, context);
    };
    GetFileUploadURLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFileUploadURLCommand(output, context);
    };
    return GetFileUploadURLCommand;
}($Command));
export { GetFileUploadURLCommand };
//# sourceMappingURL=GetFileUploadURLCommand.js.map