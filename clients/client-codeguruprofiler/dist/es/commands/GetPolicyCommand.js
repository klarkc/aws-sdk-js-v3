import { __extends } from "tslib";
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPolicyCommand, serializeAws_restJson1GetPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Returns the JSON-formatted resource-based policy on a profiling group.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetPolicyCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetPolicyCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPolicyCommand = /** @class */ (function (_super) {
    __extends(GetPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPolicyCommand(input) {
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
    GetPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "GetPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPolicyCommand(input, context);
    };
    GetPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPolicyCommand(output, context);
    };
    return GetPolicyCommand;
}($Command));
export { GetPolicyCommand };
//# sourceMappingURL=GetPolicyCommand.js.map