import { __extends } from "tslib";
import { GetLicenseManagerReportGeneratorRequest, GetLicenseManagerReportGeneratorResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand, serializeAws_json1_1GetLicenseManagerReportGeneratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information on the specified report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link GetLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLicenseManagerReportGeneratorCommand = /** @class */ (function (_super) {
    __extends(GetLicenseManagerReportGeneratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLicenseManagerReportGeneratorCommand(input) {
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
    GetLicenseManagerReportGeneratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetLicenseManagerReportGeneratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLicenseManagerReportGeneratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLicenseManagerReportGeneratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLicenseManagerReportGeneratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLicenseManagerReportGeneratorCommand(input, context);
    };
    GetLicenseManagerReportGeneratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand(output, context);
    };
    return GetLicenseManagerReportGeneratorCommand;
}($Command));
export { GetLicenseManagerReportGeneratorCommand };
//# sourceMappingURL=GetLicenseManagerReportGeneratorCommand.js.map