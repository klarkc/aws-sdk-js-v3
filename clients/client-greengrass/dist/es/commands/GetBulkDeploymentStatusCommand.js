import { __extends } from "tslib";
import { GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBulkDeploymentStatusCommand, serializeAws_restJson1GetBulkDeploymentStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns the status of a bulk deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetBulkDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetBulkDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetBulkDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetBulkDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBulkDeploymentStatusCommand = /** @class */ (function (_super) {
    __extends(GetBulkDeploymentStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBulkDeploymentStatusCommand(input) {
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
    GetBulkDeploymentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetBulkDeploymentStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBulkDeploymentStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBulkDeploymentStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBulkDeploymentStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBulkDeploymentStatusCommand(input, context);
    };
    GetBulkDeploymentStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBulkDeploymentStatusCommand(output, context);
    };
    return GetBulkDeploymentStatusCommand;
}($Command));
export { GetBulkDeploymentStatusCommand };
//# sourceMappingURL=GetBulkDeploymentStatusCommand.js.map