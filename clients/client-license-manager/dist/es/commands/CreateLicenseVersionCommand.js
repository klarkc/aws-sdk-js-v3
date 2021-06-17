import { __extends } from "tslib";
import { CreateLicenseVersionRequest, CreateLicenseVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLicenseVersionCommand, serializeAws_json1_1CreateLicenseVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLicenseVersionCommand = /** @class */ (function (_super) {
    __extends(CreateLicenseVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLicenseVersionCommand(input) {
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
    CreateLicenseVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateLicenseVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLicenseVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLicenseVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLicenseVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLicenseVersionCommand(input, context);
    };
    CreateLicenseVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLicenseVersionCommand(output, context);
    };
    return CreateLicenseVersionCommand;
}($Command));
export { CreateLicenseVersionCommand };
//# sourceMappingURL=CreateLicenseVersionCommand.js.map