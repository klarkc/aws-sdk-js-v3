import { __extends } from "tslib";
import { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/models_0";
import { deserializeAws_queryGetAccessKeyLastUsedCommand, serializeAws_queryGetAccessKeyLastUsedCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about when the specified access key was last used. The
 *             information includes the date and time of last use, along with the AWS service and
 *             Region that were specified in the last request made with that key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccessKeyLastUsedCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccessKeyLastUsedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessKeyLastUsedCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyLastUsedCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessKeyLastUsedCommand = /** @class */ (function (_super) {
    __extends(GetAccessKeyLastUsedCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessKeyLastUsedCommand(input) {
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
    GetAccessKeyLastUsedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetAccessKeyLastUsedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessKeyLastUsedRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessKeyLastUsedResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessKeyLastUsedCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetAccessKeyLastUsedCommand(input, context);
    };
    GetAccessKeyLastUsedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetAccessKeyLastUsedCommand(output, context);
    };
    return GetAccessKeyLastUsedCommand;
}($Command));
export { GetAccessKeyLastUsedCommand };
//# sourceMappingURL=GetAccessKeyLastUsedCommand.js.map