import { __extends } from "tslib";
import { GetCorsPolicyInput, GetCorsPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1GetCorsPolicyCommand, serializeAws_json1_1GetCorsPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
 *          permission and can grant it to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCorsPolicyCommand = /** @class */ (function (_super) {
    __extends(GetCorsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCorsPolicyCommand(input) {
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
    GetCorsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "GetCorsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCorsPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCorsPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCorsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCorsPolicyCommand(input, context);
    };
    GetCorsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCorsPolicyCommand(output, context);
    };
    return GetCorsPolicyCommand;
}($Command));
export { GetCorsPolicyCommand };
//# sourceMappingURL=GetCorsPolicyCommand.js.map