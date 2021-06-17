import { __extends } from "tslib";
import { GetCanaryRunsRequest, GetCanaryRunsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCanaryRunsCommand, serializeAws_restJson1GetCanaryRunsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of runs for a specified canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryRunsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryRunsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new GetCanaryRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCanaryRunsCommandInput} for command's `input` shape.
 * @see {@link GetCanaryRunsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCanaryRunsCommand = /** @class */ (function (_super) {
    __extends(GetCanaryRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCanaryRunsCommand(input) {
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
    GetCanaryRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "GetCanaryRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCanaryRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCanaryRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCanaryRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCanaryRunsCommand(input, context);
    };
    GetCanaryRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCanaryRunsCommand(output, context);
    };
    return GetCanaryRunsCommand;
}($Command));
export { GetCanaryRunsCommand };
//# sourceMappingURL=GetCanaryRunsCommand.js.map