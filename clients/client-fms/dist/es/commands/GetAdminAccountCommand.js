import { __extends } from "tslib";
import { GetAdminAccountRequest, GetAdminAccountResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAdminAccountCommand, serializeAws_json1_1GetAdminAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager
 *       as the AWS Firewall Manager administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAdminAccountCommand = /** @class */ (function (_super) {
    __extends(GetAdminAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAdminAccountCommand(input) {
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
    GetAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetAdminAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAdminAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAdminAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAdminAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAdminAccountCommand(input, context);
    };
    GetAdminAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAdminAccountCommand(output, context);
    };
    return GetAdminAccountCommand;
}($Command));
export { GetAdminAccountCommand };
//# sourceMappingURL=GetAdminAccountCommand.js.map