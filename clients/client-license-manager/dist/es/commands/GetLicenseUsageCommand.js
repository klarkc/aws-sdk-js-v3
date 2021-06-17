import { __extends } from "tslib";
import { GetLicenseUsageRequest, GetLicenseUsageResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLicenseUsageCommand, serializeAws_json1_1GetLicenseUsageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information about the usage of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseUsageCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseUsageCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseUsageCommandInput} for command's `input` shape.
 * @see {@link GetLicenseUsageCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLicenseUsageCommand = /** @class */ (function (_super) {
    __extends(GetLicenseUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLicenseUsageCommand(input) {
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
    GetLicenseUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetLicenseUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLicenseUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLicenseUsageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLicenseUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLicenseUsageCommand(input, context);
    };
    GetLicenseUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLicenseUsageCommand(output, context);
    };
    return GetLicenseUsageCommand;
}($Command));
export { GetLicenseUsageCommand };
//# sourceMappingURL=GetLicenseUsageCommand.js.map