import { __extends } from "tslib";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { deserializeAws_queryGetGroupCommand, serializeAws_queryGetGroupCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate
 *             the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupCommand = /** @class */ (function (_super) {
    __extends(GetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupCommand(input) {
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
    GetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetGroupCommand(input, context);
    };
    GetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetGroupCommand(output, context);
    };
    return GetGroupCommand;
}($Command));
export { GetGroupCommand };
//# sourceMappingURL=GetGroupCommand.js.map