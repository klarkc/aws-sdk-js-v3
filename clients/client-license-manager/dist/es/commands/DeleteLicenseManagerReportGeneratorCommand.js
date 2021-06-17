import { __extends } from "tslib";
import { DeleteLicenseManagerReportGeneratorRequest, DeleteLicenseManagerReportGeneratorResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand, serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an existing report generator.</p>
 *          <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLicenseManagerReportGeneratorCommand = /** @class */ (function (_super) {
    __extends(DeleteLicenseManagerReportGeneratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLicenseManagerReportGeneratorCommand(input) {
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
    DeleteLicenseManagerReportGeneratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "DeleteLicenseManagerReportGeneratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLicenseManagerReportGeneratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLicenseManagerReportGeneratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLicenseManagerReportGeneratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand(input, context);
    };
    DeleteLicenseManagerReportGeneratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand(output, context);
    };
    return DeleteLicenseManagerReportGeneratorCommand;
}($Command));
export { DeleteLicenseManagerReportGeneratorCommand };
//# sourceMappingURL=DeleteLicenseManagerReportGeneratorCommand.js.map