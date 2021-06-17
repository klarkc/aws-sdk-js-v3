import { __extends } from "tslib";
import { GetMembersRequest, GetMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMembersCommand, serializeAws_restJson1GetMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the membership details for specified member accounts for a behavior
 *          graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, GetMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, GetMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMembersCommandInput} for command's `input` shape.
 * @see {@link GetMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMembersCommand = /** @class */ (function (_super) {
    __extends(GetMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMembersCommand(input) {
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
    GetMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "GetMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMembersCommand(input, context);
    };
    GetMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMembersCommand(output, context);
    };
    return GetMembersCommand;
}($Command));
export { GetMembersCommand };
//# sourceMappingURL=GetMembersCommand.js.map