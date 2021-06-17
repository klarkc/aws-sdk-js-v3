import { __extends } from "tslib";
import { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateGrantCommand, serializeAws_json1_1CreateGrantCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGrantCommandInput} for command's `input` shape.
 * @see {@link CreateGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGrantCommand = /** @class */ (function (_super) {
    __extends(CreateGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGrantCommand(input) {
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
    CreateGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGrantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateGrantCommand(input, context);
    };
    CreateGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateGrantCommand(output, context);
    };
    return CreateGrantCommand;
}($Command));
export { CreateGrantCommand };
//# sourceMappingURL=CreateGrantCommand.js.map