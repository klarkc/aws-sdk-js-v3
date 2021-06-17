import { __extends } from "tslib";
import { CreateLicenseRequest, CreateLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLicenseCommand, serializeAws_json1_1CreateLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLicenseCommand = /** @class */ (function (_super) {
    __extends(CreateLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLicenseCommand(input) {
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
    CreateLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLicenseCommand(input, context);
    };
    CreateLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLicenseCommand(output, context);
    };
    return CreateLicenseCommand;
}($Command));
export { CreateLicenseCommand };
//# sourceMappingURL=CreateLicenseCommand.js.map