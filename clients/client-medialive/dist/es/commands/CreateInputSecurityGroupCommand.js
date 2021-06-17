import { __extends } from "tslib";
import { CreateInputSecurityGroupRequest, CreateInputSecurityGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateInputSecurityGroupCommand, serializeAws_restJson1CreateInputSecurityGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInputSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(CreateInputSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInputSecurityGroupCommand(input) {
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
    CreateInputSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "CreateInputSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInputSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInputSecurityGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInputSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInputSecurityGroupCommand(input, context);
    };
    CreateInputSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInputSecurityGroupCommand(output, context);
    };
    return CreateInputSecurityGroupCommand;
}($Command));
export { CreateInputSecurityGroupCommand };
//# sourceMappingURL=CreateInputSecurityGroupCommand.js.map