import { __extends } from "tslib";
import { UpdateLicenseManagerReportGeneratorRequest, UpdateLicenseManagerReportGeneratorResponse, } from "../models/models_0";
import { deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand, serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a report generator.</p>
 *          <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLicenseManagerReportGeneratorCommand = /** @class */ (function (_super) {
    __extends(UpdateLicenseManagerReportGeneratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLicenseManagerReportGeneratorCommand(input) {
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
    UpdateLicenseManagerReportGeneratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "UpdateLicenseManagerReportGeneratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLicenseManagerReportGeneratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLicenseManagerReportGeneratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLicenseManagerReportGeneratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand(input, context);
    };
    UpdateLicenseManagerReportGeneratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand(output, context);
    };
    return UpdateLicenseManagerReportGeneratorCommand;
}($Command));
export { UpdateLicenseManagerReportGeneratorCommand };
//# sourceMappingURL=UpdateLicenseManagerReportGeneratorCommand.js.map