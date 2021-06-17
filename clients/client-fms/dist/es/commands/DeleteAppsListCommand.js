import { __extends } from "tslib";
import { DeleteAppsListRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAppsListCommand, serializeAws_json1_1DeleteAppsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes an AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppsListCommandInput} for command's `input` shape.
 * @see {@link DeleteAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppsListCommand = /** @class */ (function (_super) {
    __extends(DeleteAppsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppsListCommand(input) {
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
    DeleteAppsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "DeleteAppsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppsListCommand(input, context);
    };
    DeleteAppsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppsListCommand(output, context);
    };
    return DeleteAppsListCommand;
}($Command));
export { DeleteAppsListCommand };
//# sourceMappingURL=DeleteAppsListCommand.js.map