import { __extends } from "tslib";
import { AcceptGrantRequest, AcceptGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1AcceptGrantCommand, serializeAws_json1_1AcceptGrantCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, AcceptGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, AcceptGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new AcceptGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptGrantCommand = /** @class */ (function (_super) {
    __extends(AcceptGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptGrantCommand(input) {
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
    AcceptGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "AcceptGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptGrantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptGrantCommand(input, context);
    };
    AcceptGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptGrantCommand(output, context);
    };
    return AcceptGrantCommand;
}($Command));
export { AcceptGrantCommand };
//# sourceMappingURL=AcceptGrantCommand.js.map