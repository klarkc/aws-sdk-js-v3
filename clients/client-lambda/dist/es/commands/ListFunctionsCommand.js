import { __extends } from "tslib";
import { ListFunctionsRequest, ListFunctionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFunctionsCommand, serializeAws_restJson1ListFunctionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
 *       functions per call.</p>
 *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
 *       addition to the unpublished version. </p>
 *          <note>
 *             <p>The <code>ListFunctions</code> action returns a subset of the <a>FunctionConfiguration</a> fields.
 *       To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode)
 *       for a function or version, use <a>GetFunction</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFunctionsCommand = /** @class */ (function (_super) {
    __extends(ListFunctionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFunctionsCommand(input) {
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
    ListFunctionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListFunctionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFunctionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFunctionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFunctionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFunctionsCommand(input, context);
    };
    ListFunctionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFunctionsCommand(output, context);
    };
    return ListFunctionsCommand;
}($Command));
export { ListFunctionsCommand };
//# sourceMappingURL=ListFunctionsCommand.js.map