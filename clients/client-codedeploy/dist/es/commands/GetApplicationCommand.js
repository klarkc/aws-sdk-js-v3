import { __extends } from "tslib";
import { GetApplicationInput, GetApplicationOutput } from "../models/models_0";
import { deserializeAws_json1_1GetApplicationCommand, serializeAws_json1_1GetApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApplicationCommand = /** @class */ (function (_super) {
    __extends(GetApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApplicationCommand(input) {
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
    GetApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApplicationInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetApplicationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetApplicationCommand(input, context);
    };
    GetApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetApplicationCommand(output, context);
    };
    return GetApplicationCommand;
}($Command));
export { GetApplicationCommand };
//# sourceMappingURL=GetApplicationCommand.js.map