import { __extends } from "tslib";
import { GetLicenseRequest, GetLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLicenseCommand, serializeAws_json1_1GetLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information about the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseCommandInput} for command's `input` shape.
 * @see {@link GetLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLicenseCommand = /** @class */ (function (_super) {
    __extends(GetLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLicenseCommand(input) {
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
    GetLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLicenseCommand(input, context);
    };
    GetLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLicenseCommand(output, context);
    };
    return GetLicenseCommand;
}($Command));
export { GetLicenseCommand };
//# sourceMappingURL=GetLicenseCommand.js.map