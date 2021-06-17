import { __extends } from "tslib";
import { GetInstanceAccessDetailsRequest, GetInstanceAccessDetailsResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceAccessDetailsCommand, serializeAws_json1_1GetInstanceAccessDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or
 *         <i>instance</i>.</p>
 *          <p>The <code>get instance access details</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by <code>instance name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceAccessDetailsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceAccessDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceAccessDetailsCommand = /** @class */ (function (_super) {
    __extends(GetInstanceAccessDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceAccessDetailsCommand(input) {
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
    GetInstanceAccessDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstanceAccessDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceAccessDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceAccessDetailsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceAccessDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceAccessDetailsCommand(input, context);
    };
    GetInstanceAccessDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceAccessDetailsCommand(output, context);
    };
    return GetInstanceAccessDetailsCommand;
}($Command));
export { GetInstanceAccessDetailsCommand };
//# sourceMappingURL=GetInstanceAccessDetailsCommand.js.map