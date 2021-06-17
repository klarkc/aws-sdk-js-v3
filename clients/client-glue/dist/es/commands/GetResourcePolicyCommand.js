import { __extends } from "tslib";
import { GetResourcePolicyRequest, GetResourcePolicyResponse } from "../models/models_1";
import { deserializeAws_json1_1GetResourcePolicyCommand, serializeAws_json1_1GetResourcePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a specified resource policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(GetResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourcePolicyCommand(input) {
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
    GetResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResourcePolicyCommand(input, context);
    };
    GetResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResourcePolicyCommand(output, context);
    };
    return GetResourcePolicyCommand;
}($Command));
export { GetResourcePolicyCommand };
//# sourceMappingURL=GetResourcePolicyCommand.js.map