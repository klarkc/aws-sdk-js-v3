import { __extends } from "tslib";
import { GetGroupsRequest, GetGroupsResult } from "../models/models_0";
import { deserializeAws_restJson1GetGroupsCommand, serializeAws_restJson1GetGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all active group details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupsCommandInput} for command's `input` shape.
 * @see {@link GetGroupsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupsCommand = /** @class */ (function (_super) {
    __extends(GetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupsCommand(input) {
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
    GetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupsCommand(input, context);
    };
    GetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupsCommand(output, context);
    };
    return GetGroupsCommand;
}($Command));
export { GetGroupsCommand };
//# sourceMappingURL=GetGroupsCommand.js.map