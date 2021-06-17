import { __extends } from "tslib";
import { CreateLinkRequest, CreateLinkResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLinkCommand, serializeAws_restJson1CreateLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new link for a specified site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLinkCommand = /** @class */ (function (_super) {
    __extends(CreateLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLinkCommand(input) {
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
    CreateLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "CreateLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLinkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLinkCommand(input, context);
    };
    CreateLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLinkCommand(output, context);
    };
    return CreateLinkCommand;
}($Command));
export { CreateLinkCommand };
//# sourceMappingURL=CreateLinkCommand.js.map