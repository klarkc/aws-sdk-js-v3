import { __extends } from "tslib";
import { RevokeIpRulesRequest, RevokeIpRulesResult } from "../models/models_0";
import { deserializeAws_json1_1RevokeIpRulesCommand, serializeAws_json1_1RevokeIpRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more rules from the specified IP access control group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RevokeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RevokeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RevokeIpRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeIpRulesCommandInput} for command's `input` shape.
 * @see {@link RevokeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeIpRulesCommand = /** @class */ (function (_super) {
    __extends(RevokeIpRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeIpRulesCommand(input) {
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
    RevokeIpRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "RevokeIpRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeIpRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeIpRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeIpRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RevokeIpRulesCommand(input, context);
    };
    RevokeIpRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RevokeIpRulesCommand(output, context);
    };
    return RevokeIpRulesCommand;
}($Command));
export { RevokeIpRulesCommand };
//# sourceMappingURL=RevokeIpRulesCommand.js.map