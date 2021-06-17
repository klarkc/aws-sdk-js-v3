import { __extends } from "tslib";
import { ListAssociationsForLicenseConfigurationRequest, ListAssociationsForLicenseConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand, serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resource associations for the specified license configuration.</p>
 *          <p>Resource associations need not consume licenses from a license configuration.
 *          For example, an AMI or a stopped instance might not consume a license (depending on
 *          the license rules).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListAssociationsForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationsForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociationsForLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(ListAssociationsForLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociationsForLicenseConfigurationCommand(input) {
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
    ListAssociationsForLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListAssociationsForLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociationsForLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociationsForLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociationsForLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(input, context);
    };
    ListAssociationsForLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(output, context);
    };
    return ListAssociationsForLicenseConfigurationCommand;
}($Command));
export { ListAssociationsForLicenseConfigurationCommand };
//# sourceMappingURL=ListAssociationsForLicenseConfigurationCommand.js.map