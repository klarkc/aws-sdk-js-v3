import { __extends } from "tslib";
import { CreateLicenseConfigurationRequest, CreateLicenseConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLicenseConfigurationCommand, serializeAws_json1_1CreateLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a license configuration.</p>
 *          <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), license affinity  to host (how long a
 *          license must be associated with a host), and the number of licenses purchased and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLicenseConfigurationCommand(input) {
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
    CreateLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLicenseConfigurationCommand(input, context);
    };
    CreateLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLicenseConfigurationCommand(output, context);
    };
    return CreateLicenseConfigurationCommand;
}($Command));
export { CreateLicenseConfigurationCommand };
//# sourceMappingURL=CreateLicenseConfigurationCommand.js.map