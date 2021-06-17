import { __extends } from "tslib";
import { GetDeploymentStatusRequest, GetDeploymentStatusResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeploymentStatusCommand, serializeAws_restJson1GetDeploymentStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns the status of a deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentStatusCommand = /** @class */ (function (_super) {
    __extends(GetDeploymentStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeploymentStatusCommand(input) {
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
    GetDeploymentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetDeploymentStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeploymentStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeploymentStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeploymentStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeploymentStatusCommand(input, context);
    };
    GetDeploymentStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeploymentStatusCommand(output, context);
    };
    return GetDeploymentStatusCommand;
}($Command));
export { GetDeploymentStatusCommand };
//# sourceMappingURL=GetDeploymentStatusCommand.js.map