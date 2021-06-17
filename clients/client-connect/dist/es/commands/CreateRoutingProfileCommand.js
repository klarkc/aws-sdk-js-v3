import { __extends } from "tslib";
import { CreateRoutingProfileRequest, CreateRoutingProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRoutingProfileCommand, serializeAws_restJson1CreateRoutingProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRoutingProfileCommand = /** @class */ (function (_super) {
    __extends(CreateRoutingProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRoutingProfileCommand(input) {
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
    CreateRoutingProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateRoutingProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRoutingProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRoutingProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRoutingProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRoutingProfileCommand(input, context);
    };
    CreateRoutingProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRoutingProfileCommand(output, context);
    };
    return CreateRoutingProfileCommand;
}($Command));
export { CreateRoutingProfileCommand };
//# sourceMappingURL=CreateRoutingProfileCommand.js.map