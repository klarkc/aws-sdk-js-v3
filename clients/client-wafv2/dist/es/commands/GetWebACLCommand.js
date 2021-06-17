import { __extends } from "tslib";
import { GetWebACLRequest, GetWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1GetWebACLCommand, serializeAws_json1_1GetWebACLCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified <a>WebACL</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebACLCommandInput} for command's `input` shape.
 * @see {@link GetWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWebACLCommand = /** @class */ (function (_super) {
    __extends(GetWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWebACLCommand(input) {
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
    GetWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWebACLCommand(input, context);
    };
    GetWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWebACLCommand(output, context);
    };
    return GetWebACLCommand;
}($Command));
export { GetWebACLCommand };
//# sourceMappingURL=GetWebACLCommand.js.map