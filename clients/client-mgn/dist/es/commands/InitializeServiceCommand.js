import { __extends } from "tslib";
import { InitializeServiceRequest, InitializeServiceResponse } from "../models/models_0";
import { deserializeAws_restJson1InitializeServiceCommand, serializeAws_restJson1InitializeServiceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initialize Application Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, InitializeServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, InitializeServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new InitializeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitializeServiceCommandInput} for command's `input` shape.
 * @see {@link InitializeServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitializeServiceCommand = /** @class */ (function (_super) {
    __extends(InitializeServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InitializeServiceCommand(input) {
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
    InitializeServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "InitializeServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InitializeServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InitializeServiceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InitializeServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InitializeServiceCommand(input, context);
    };
    InitializeServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InitializeServiceCommand(output, context);
    };
    return InitializeServiceCommand;
}($Command));
export { InitializeServiceCommand };
//# sourceMappingURL=InitializeServiceCommand.js.map