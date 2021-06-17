import { __extends } from "tslib";
import { GetWebACLForResourceRequest, GetWebACLForResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1GetWebACLForResourceCommand, serializeAws_json1_1GetWebACLForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetWebACLForResourceCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetWebACLForResourceCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetWebACLForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebACLForResourceCommandInput} for command's `input` shape.
 * @see {@link GetWebACLForResourceCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWebACLForResourceCommand = /** @class */ (function (_super) {
    __extends(GetWebACLForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWebACLForResourceCommand(input) {
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
    GetWebACLForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetWebACLForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWebACLForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWebACLForResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWebACLForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWebACLForResourceCommand(input, context);
    };
    GetWebACLForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWebACLForResourceCommand(output, context);
    };
    return GetWebACLForResourceCommand;
}($Command));
export { GetWebACLForResourceCommand };
//# sourceMappingURL=GetWebACLForResourceCommand.js.map