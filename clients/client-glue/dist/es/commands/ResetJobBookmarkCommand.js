import { __extends } from "tslib";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/models_1";
import { deserializeAws_json1_1ResetJobBookmarkCommand, serializeAws_json1_1ResetJobBookmarkCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets a bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link ResetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetJobBookmarkCommand = /** @class */ (function (_super) {
    __extends(ResetJobBookmarkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetJobBookmarkCommand(input) {
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
    ResetJobBookmarkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ResetJobBookmarkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetJobBookmarkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetJobBookmarkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetJobBookmarkCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetJobBookmarkCommand(input, context);
    };
    ResetJobBookmarkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetJobBookmarkCommand(output, context);
    };
    return ResetJobBookmarkCommand;
}($Command));
export { ResetJobBookmarkCommand };
//# sourceMappingURL=ResetJobBookmarkCommand.js.map