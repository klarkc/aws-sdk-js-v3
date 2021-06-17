import { __extends } from "tslib";
import { GetParameterHistoryRequest, GetParameterHistoryResult } from "../models/models_1";
import { deserializeAws_json1_1GetParameterHistoryCommand, serializeAws_json1_1GetParameterHistoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the history of all changes to a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterHistoryCommandInput} for command's `input` shape.
 * @see {@link GetParameterHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetParameterHistoryCommand = /** @class */ (function (_super) {
    __extends(GetParameterHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetParameterHistoryCommand(input) {
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
    GetParameterHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParameterHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParameterHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParameterHistoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParameterHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParameterHistoryCommand(input, context);
    };
    GetParameterHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParameterHistoryCommand(output, context);
    };
    return GetParameterHistoryCommand;
}($Command));
export { GetParameterHistoryCommand };
//# sourceMappingURL=GetParameterHistoryCommand.js.map