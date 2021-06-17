import { __extends } from "tslib";
import { UpdateAddonRequest, UpdateAddonResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAddonCommand, serializeAws_restJson1UpdateAddonCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon EKS add-on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAddonCommandInput} for command's `input` shape.
 * @see {@link UpdateAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAddonCommand = /** @class */ (function (_super) {
    __extends(UpdateAddonCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAddonCommand(input) {
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
    UpdateAddonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "UpdateAddonCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAddonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAddonResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAddonCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAddonCommand(input, context);
    };
    UpdateAddonCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAddonCommand(output, context);
    };
    return UpdateAddonCommand;
}($Command));
export { UpdateAddonCommand };
//# sourceMappingURL=UpdateAddonCommand.js.map