import { __extends } from "tslib";
import { CreateLicenseManagerReportGeneratorRequest, CreateLicenseManagerReportGeneratorResponse, } from "../models/models_0";
import { deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand, serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLicenseManagerReportGeneratorCommand = /** @class */ (function (_super) {
    __extends(CreateLicenseManagerReportGeneratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLicenseManagerReportGeneratorCommand(input) {
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
    CreateLicenseManagerReportGeneratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateLicenseManagerReportGeneratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLicenseManagerReportGeneratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLicenseManagerReportGeneratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLicenseManagerReportGeneratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand(input, context);
    };
    CreateLicenseManagerReportGeneratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand(output, context);
    };
    return CreateLicenseManagerReportGeneratorCommand;
}($Command));
export { CreateLicenseManagerReportGeneratorCommand };
//# sourceMappingURL=CreateLicenseManagerReportGeneratorCommand.js.map