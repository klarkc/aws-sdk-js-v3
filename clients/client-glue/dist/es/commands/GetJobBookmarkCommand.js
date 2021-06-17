import { __extends } from "tslib";
import { GetJobBookmarkRequest } from "../models/models_0";
import { GetJobBookmarkResponse } from "../models/models_1";
import { deserializeAws_json1_1GetJobBookmarkCommand, serializeAws_json1_1GetJobBookmarkCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information on a job bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link GetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobBookmarkCommand = /** @class */ (function (_super) {
    __extends(GetJobBookmarkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobBookmarkCommand(input) {
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
    GetJobBookmarkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetJobBookmarkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobBookmarkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobBookmarkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobBookmarkCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobBookmarkCommand(input, context);
    };
    GetJobBookmarkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobBookmarkCommand(output, context);
    };
    return GetJobBookmarkCommand;
}($Command));
export { GetJobBookmarkCommand };
//# sourceMappingURL=GetJobBookmarkCommand.js.map