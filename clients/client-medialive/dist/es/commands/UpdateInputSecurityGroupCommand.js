import { __extends } from "tslib";
import { UpdateInputSecurityGroupRequest, UpdateInputSecurityGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateInputSecurityGroupCommand, serializeAws_restJson1UpdateInputSecurityGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Update an Input Security Group's Whilelists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInputSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateInputSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInputSecurityGroupCommand(input) {
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
    UpdateInputSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateInputSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInputSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInputSecurityGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInputSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInputSecurityGroupCommand(input, context);
    };
    UpdateInputSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInputSecurityGroupCommand(output, context);
    };
    return UpdateInputSecurityGroupCommand;
}($Command));
export { UpdateInputSecurityGroupCommand };
//# sourceMappingURL=UpdateInputSecurityGroupCommand.js.map