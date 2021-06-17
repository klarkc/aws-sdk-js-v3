import { __extends } from "tslib";
import { GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput } from "../models/models_0";
import { deserializeAws_json1_1GetOnPremisesInstanceCommand, serializeAws_json1_1GetOnPremisesInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets information about an on-premises instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link GetOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOnPremisesInstanceCommand = /** @class */ (function (_super) {
    __extends(GetOnPremisesInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOnPremisesInstanceCommand(input) {
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
    GetOnPremisesInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetOnPremisesInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOnPremisesInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetOnPremisesInstanceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOnPremisesInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOnPremisesInstanceCommand(input, context);
    };
    GetOnPremisesInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOnPremisesInstanceCommand(output, context);
    };
    return GetOnPremisesInstanceCommand;
}($Command));
export { GetOnPremisesInstanceCommand };
//# sourceMappingURL=GetOnPremisesInstanceCommand.js.map