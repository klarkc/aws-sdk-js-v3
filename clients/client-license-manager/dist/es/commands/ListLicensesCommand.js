import { __extends } from "tslib";
import { ListLicensesRequest, ListLicensesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLicensesCommand, serializeAws_json1_1ListLicensesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the licenses for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicensesCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicensesCommandInput} for command's `input` shape.
 * @see {@link ListLicensesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLicensesCommand = /** @class */ (function (_super) {
    __extends(ListLicensesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLicensesCommand(input) {
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
    ListLicensesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListLicensesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLicensesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLicensesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLicensesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLicensesCommand(input, context);
    };
    ListLicensesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLicensesCommand(output, context);
    };
    return ListLicensesCommand;
}($Command));
export { ListLicensesCommand };
//# sourceMappingURL=ListLicensesCommand.js.map