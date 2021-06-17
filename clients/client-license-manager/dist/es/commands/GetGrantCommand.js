import { __extends } from "tslib";
import { GetGrantRequest, GetGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1GetGrantCommand, serializeAws_json1_1GetGrantCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information about the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGrantCommandInput} for command's `input` shape.
 * @see {@link GetGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGrantCommand = /** @class */ (function (_super) {
    __extends(GetGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGrantCommand(input) {
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
    GetGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGrantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetGrantCommand(input, context);
    };
    GetGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetGrantCommand(output, context);
    };
    return GetGrantCommand;
}($Command));
export { GetGrantCommand };
//# sourceMappingURL=GetGrantCommand.js.map