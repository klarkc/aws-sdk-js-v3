import { __extends } from "tslib";
import { CreateGrantVersionRequest, CreateGrantVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateGrantVersionCommand, serializeAws_json1_1CreateGrantVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateGrantVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGrantVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGrantVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGrantVersionCommand = /** @class */ (function (_super) {
    __extends(CreateGrantVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGrantVersionCommand(input) {
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
    CreateGrantVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateGrantVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGrantVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGrantVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGrantVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateGrantVersionCommand(input, context);
    };
    CreateGrantVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateGrantVersionCommand(output, context);
    };
    return CreateGrantVersionCommand;
}($Command));
export { CreateGrantVersionCommand };
//# sourceMappingURL=CreateGrantVersionCommand.js.map