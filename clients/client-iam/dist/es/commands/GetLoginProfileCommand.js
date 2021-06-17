import { __extends } from "tslib";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/models_0";
import { deserializeAws_queryGetLoginProfileCommand, serializeAws_queryGetLoginProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the user name and password creation date for the specified IAM user. If
 *             the user has not been assigned a password, the operation returns a 404
 *                 (<code>NoSuchEntity</code>) error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoginProfileCommandInput} for command's `input` shape.
 * @see {@link GetLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoginProfileCommand = /** @class */ (function (_super) {
    __extends(GetLoginProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoginProfileCommand(input) {
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
    GetLoginProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetLoginProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoginProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoginProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoginProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetLoginProfileCommand(input, context);
    };
    GetLoginProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetLoginProfileCommand(output, context);
    };
    return GetLoginProfileCommand;
}($Command));
export { GetLoginProfileCommand };
//# sourceMappingURL=GetLoginProfileCommand.js.map