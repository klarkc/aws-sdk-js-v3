import { __extends } from "tslib";
import { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/models_0";
import { deserializeAws_json1_1GetApplicationRevisionCommand, serializeAws_json1_1GetApplicationRevisionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an application revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApplicationRevisionCommand = /** @class */ (function (_super) {
    __extends(GetApplicationRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApplicationRevisionCommand(input) {
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
    GetApplicationRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetApplicationRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApplicationRevisionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetApplicationRevisionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApplicationRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetApplicationRevisionCommand(input, context);
    };
    GetApplicationRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetApplicationRevisionCommand(output, context);
    };
    return GetApplicationRevisionCommand;
}($Command));
export { GetApplicationRevisionCommand };
//# sourceMappingURL=GetApplicationRevisionCommand.js.map