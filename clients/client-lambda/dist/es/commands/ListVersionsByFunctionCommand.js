import { __extends } from "tslib";
import { ListVersionsByFunctionRequest, ListVersionsByFunctionResponse } from "../models/models_0";
import { deserializeAws_restJson1ListVersionsByFunctionCommand, serializeAws_restJson1ListVersionsByFunctionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>,
 *       with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListVersionsByFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListVersionsByFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListVersionsByFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVersionsByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListVersionsByFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVersionsByFunctionCommand = /** @class */ (function (_super) {
    __extends(ListVersionsByFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVersionsByFunctionCommand(input) {
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
    ListVersionsByFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListVersionsByFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVersionsByFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVersionsByFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVersionsByFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListVersionsByFunctionCommand(input, context);
    };
    ListVersionsByFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListVersionsByFunctionCommand(output, context);
    };
    return ListVersionsByFunctionCommand;
}($Command));
export { ListVersionsByFunctionCommand };
//# sourceMappingURL=ListVersionsByFunctionCommand.js.map