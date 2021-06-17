import { __extends } from "tslib";
import { ListLicenseManagerReportGeneratorsRequest, ListLicenseManagerReportGeneratorsResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand, serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the report generators for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseManagerReportGeneratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseManagerReportGeneratorsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseManagerReportGeneratorsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLicenseManagerReportGeneratorsCommand = /** @class */ (function (_super) {
    __extends(ListLicenseManagerReportGeneratorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLicenseManagerReportGeneratorsCommand(input) {
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
    ListLicenseManagerReportGeneratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListLicenseManagerReportGeneratorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLicenseManagerReportGeneratorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLicenseManagerReportGeneratorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLicenseManagerReportGeneratorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(input, context);
    };
    ListLicenseManagerReportGeneratorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(output, context);
    };
    return ListLicenseManagerReportGeneratorsCommand;
}($Command));
export { ListLicenseManagerReportGeneratorsCommand };
//# sourceMappingURL=ListLicenseManagerReportGeneratorsCommand.js.map