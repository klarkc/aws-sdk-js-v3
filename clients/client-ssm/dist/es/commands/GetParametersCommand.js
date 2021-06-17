import { __extends } from "tslib";
import { GetParametersRequest, GetParametersResult } from "../models/models_1";
import { deserializeAws_json1_1GetParametersCommand, serializeAws_json1_1GetParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersCommandInput} for command's `input` shape.
 * @see {@link GetParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetParametersCommand = /** @class */ (function (_super) {
    __extends(GetParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetParametersCommand(input) {
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
    GetParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParametersCommand(input, context);
    };
    GetParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParametersCommand(output, context);
    };
    return GetParametersCommand;
}($Command));
export { GetParametersCommand };
//# sourceMappingURL=GetParametersCommand.js.map