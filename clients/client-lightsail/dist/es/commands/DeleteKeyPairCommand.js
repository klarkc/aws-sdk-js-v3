import { __extends } from "tslib";
import { DeleteKeyPairRequest, DeleteKeyPairResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteKeyPairCommand, serializeAws_json1_1DeleteKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific SSH key pair.</p>
 *          <p>The <code>delete key pair</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>key pair name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteKeyPairCommand = /** @class */ (function (_super) {
    __extends(DeleteKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteKeyPairCommand(input) {
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
    DeleteKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteKeyPairCommand(input, context);
    };
    DeleteKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteKeyPairCommand(output, context);
    };
    return DeleteKeyPairCommand;
}($Command));
export { DeleteKeyPairCommand };
//# sourceMappingURL=DeleteKeyPairCommand.js.map