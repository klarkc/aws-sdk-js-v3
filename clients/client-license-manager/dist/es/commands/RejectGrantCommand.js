import { __extends } from "tslib";
import { RejectGrantRequest, RejectGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1RejectGrantCommand, serializeAws_json1_1RejectGrantCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, RejectGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, RejectGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new RejectGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectGrantCommandInput} for command's `input` shape.
 * @see {@link RejectGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectGrantCommand = /** @class */ (function (_super) {
    __extends(RejectGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectGrantCommand(input) {
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
    RejectGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "RejectGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectGrantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RejectGrantCommand(input, context);
    };
    RejectGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RejectGrantCommand(output, context);
    };
    return RejectGrantCommand;
}($Command));
export { RejectGrantCommand };
//# sourceMappingURL=RejectGrantCommand.js.map